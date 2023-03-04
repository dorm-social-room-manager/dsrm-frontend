import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CustomTableProps } from './CustomTable.types';
import { FetchError } from '../../errors/FetchError';

export function CustomTable<T extends Record<PropertyKey, unknown>>(props: CustomTableProps<T>) {
  const { head, toolbar, fetchUrl, customTableStatefulVariables } = props;
  const { selected, page, rows, rowsPerPage, setSelected, setPage, setRows, setRowsPerPage } = customTableStatefulVariables;

  const pixelHeightPerRow = 53;
  const rowsPerPageArray = [5, 10, 25];

  const handleClick = (event: MouseEvent<unknown>, row: T) => {
    const selectedIndex = selected.indexOf(
      selected.find((item) => {
        return item.id === row.id;
      }) as T
    );
    let newSelected: readonly T[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (row: T) => {
    return (
      selected.filter((item) => {
        return item.id === row.id;
      }).length > 0
    );
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data: T[]) => {
        return setRows(data);
      })
      .catch((error) => {
        if (error instanceof FetchError) {
          throw new FetchError(`Failed to fetch users with error: ${error.message}`);
        }
      });
  });

  return (
    <Box
      width='100%'
      height='100%'
    >
      {toolbar}

      <TableContainer>
        <Table>
          {head}
          <TableBody>
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row);
              const labelId = `enhanced-table-checkbox-${index}`;

              type TableDataKeys = Exclude<keyof T, symbol>;
              const columnNames: TableDataKeys[] = Object.keys(row) as TableDataKeys[];

              const tableCells = columnNames.slice(1).map((key) => {
                return (
                  <TableCell
                    key={key}
                    align='left'
                  >
                    {row[key] as React.ReactNode}
                  </TableCell>
                );
              });

              return (
                <TableRow
                  hover
                  onClick={(event: MouseEvent<unknown>) => {
                    return handleClick(event, row);
                  }}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id as number}
                  selected={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      color='primary'
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  {tableCells}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: pixelHeightPerRow * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageArray}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
