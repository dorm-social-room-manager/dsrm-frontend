import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { ColumnConfig, CustomTableProps } from './CustomTable.types';
import { CustomTableHead } from '../CustomTableHead/CustomTableHead';
import { CustomTableRow } from '../CustomTableRow/CustomTableRow';
import { FetchError } from '../../errors/FetchError';
import { MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export function CustomTable<T extends Record<PropertyKey, unknown>>(props: CustomTableProps<T>) {
  const {
    toolbar,
    columnConfig,
    fetchUrl,
    selectedRowsIds,
    page,
    rows,
    rowsPerPage,
    setColumnConfig,
    setSelectedRowsIds,
    setPage,
    setRowsPerPage,
    setRows,
  } = props;

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

  const pixelHeightPerRow = 53;
  const rowsPerPageArray = [5, 10, 25];

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function createColumnConfig(data: T) {
    const columnConfigArr: ColumnConfig<keyof T>[] = [];

    Object.keys(data).forEach((key) => {
      columnConfigArr.push({ id: key as keyof T, label: key.toUpperCase(), sortDirection: SortingDirection.ASC });
    });

    return columnConfigArr;
  }
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data: T[]) => {
        if (data) {
          const colConfigArr = createColumnConfig(data[0]);
          setColumnConfig(colConfigArr);
        }
        return setRows(data);
      })
      .catch((error) => {
        if (error instanceof FetchError) {
          throw new FetchError(`Failed to fetch with error: ${error.message}`);
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
          {<CustomTableHead {...props} />}
          <TableBody>
            {rows.map((row, index) => {
              return (
                <CustomTableRow<T>
                  key={row.id as number}
                  row={row}
                  rowIdx={index}
                  isSelected={selectedRowsIds.indexOf(String(row.id)) !== -1}
                  handleClick={handleClick}
                  columnConfig={columnConfig}
                ></CustomTableRow>
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
