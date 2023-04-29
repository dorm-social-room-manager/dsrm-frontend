import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CustomTableHead } from '../CustomTableHead/CustomTableHead';
import { CustomTableProps } from './CustomTable.types';
import { FetchError } from '../../errors/FetchError';

export function CustomTable<T extends Record<PropertyKey, unknown>>(props: CustomTableProps<T>) {
  const { toolbar, fetchUrl, selectedRowsIds, page, rows, rowsPerPage, setSelectedRowsIds, setPage, setRowsPerPage, setRows } = props;

  const isSelected = (row: T) => {
    return (
      selectedRowsIds.filter((item) => {
        return (row.id as string) === item;
      }).length > 0
    );
  };

  const pixelHeightPerRow = 53;
  const rowsPerPageArray = [5, 10, 25];

  const handleClick = (event: MouseEvent<unknown>, row: T) => {
    const selectedIndex = selectedRowsIds.indexOf(
      selectedRowsIds.find((item) => {
        return String(row.id) === item;
      }) as string
    );
    let newSelectedRowsIds: readonly string[];

    if (selectedIndex === -1) {
      newSelectedRowsIds = [...selectedRowsIds, String(row.id)];
    } else {
      const firstPart = selectedRowsIds.slice(0, selectedIndex);
      const secondPart = selectedRowsIds.slice(selectedIndex + 1);
      newSelectedRowsIds = [...firstPart, ...secondPart];
    }

    setSelectedRowsIds(newSelectedRowsIds);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          throw new FetchError(`Failed to fetch with error: ${error.message}`);
        }
      });
  });

  const renderRow = (row: T, rowIdx: number) => {
    const isItemSelected = isSelected(row);
    const labelId = `enhanced-table-checkbox-${rowIdx}`;

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
        {Object.entries(row).map(([key, value]) => {
          return (
            <TableCell
              key={key}
              align='left'
            >
              {String(value)}
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

  return (
    <Box
      width='100%'
      height='100%'
    >
      {toolbar}

      <TableContainer>
        <Table>
          {<CustomTableHead {...props} />}
          <TableBody>
            {rows.map((row, index) => {
              return renderRow(row, index);
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
