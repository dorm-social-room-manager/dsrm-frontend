import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { ColumnConfig, CustomTableProps, IdentifiableObject } from './CustomTable.types';
import { CustomTableHead } from '../CustomTableHead/CustomTableHead';
import { CustomTableRow } from '../CustomTableRow/CustomTableRow';
import { FetchError } from '../../errors/FetchError';
import { MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';

export function CustomTable<T extends IdentifiableObject>(props: CustomTableProps<T>) {
  const {
    toolbar,
    columnConfig,
    fetchUrl,
    selectedRowsIds,
    tableName,
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
    const selectedIndex = selectedRowsIds.findIndex((item) => {
      return row.id === item;
    });
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

  const handleChangePage = (_event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function createColumnConfig(data: T, specificColumnConfig?: ColumnConfig<T, keyof T>[]) {
    const columnConfigArr: ColumnConfig<T, keyof T>[] = [];

    Object.keys(data).forEach((key) => {
      if (specificColumnConfig) {
        const specificColumn = specificColumnConfig.find((item) => {
          return item.id === key;
        });

        if (specificColumn) {
          columnConfigArr.push(specificColumn);
        }
      } else {
        columnConfigArr.push({
          id: key as keyof T,
          label: t(`${tableName}.${key}`),
          rowDisplayValue: (param: T[keyof T]) => {
            return param as unknown as string;
          },
          sortDirection: SortingDirection.ASC,
        });
      }
    });

    return columnConfigArr;
  }
  //if we are not on the first page, we need to calculate the number of empty rows to be displayed
  //in most cases this is zero, on the last page it is usually less than the number of rows per page
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data: T[]) => {
        /
        return setRows(data);
      })
      .catch((error) => {
        const errorMessage = JSON.stringify(error);
        throw new FetchError(`Failed to fetch with error: ${errorMessage}`);
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
                  key={row.id}
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
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
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
