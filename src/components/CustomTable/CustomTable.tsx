import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CustomTableProps } from './CustomTable.types';
import { FetchError } from '../../errors/FetchError';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';

export function CustomTable<T extends Record<PropertyKey, unknown>>(props: CustomTableProps<T>) {
  const {
    toolbar,
    headerCells,
    fetchUrl,
    sortingConfig,
    selectedRowsIds,
    page,
    tableName,
    rows,
    rowsPerPage,
    setSortingConfig,
    setSelectedRowsIds,
    setPage,
    setRowsPerPage,
    setRows,
  } = props;

  const isSelected = (row: T) => {
    return (
      selectedRowsIds.filter((item) => {
        return (row.id as string) === item;
      }).length > 0
    );
  };

  function updateSortingRule(index: number, columnName: string, sortDirection: SortingDirection) {
    const updatedConfig = [...sortingConfig];
    updatedConfig.splice(index, 1, { columnName, sortDirection });
    setSortingConfig(updatedConfig);
  }

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

  const handleRequestSort = (_event: MouseEvent<unknown>, property: keyof T) => {
    const idx = sortingConfig.findIndex((config) => {
      return config.columnName === property;
    });

    const isAsc = sortingConfig[idx].columnName === property && sortingConfig[idx].sortDirection === SortingDirection.ASC;
    const newSortingDirection = isAsc ? SortingDirection.DESC : SortingDirection.ASC;

    updateSortingRule(idx, String(property), newSortingDirection);

    /* when backend synchronization will be done, this will send out a REST request*/
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      //check whether the rows have been selected
      const newSelectedRowsIds: readonly string[] = rows
        .map((row, index) => {
          return !isSelected(row) ? String(index) : String(-1);
        })
        .filter((index) => {
          return index !== String(-1);
        });

      setSelectedRowsIds(selectedRowsIds.concat(newSelectedRowsIds));
      return;
    }

    setSelectedRowsIds(
      selectedRowsIds.filter((rowId) => {
        return !rows.find((item) => {
          return item.id === rowId;
        });
      })
    );
  };

  const createSortHandler = (property: keyof T) => {
    return (event: MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };
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

  const renderHead = () => {
    const label = t(`${tableName}.selectAll`);
    return (
      <TableHead>
        <TableRow>
          <TableCell padding='checkbox'>
            <Checkbox
              color='primary'
              indeterminate={selectedRowsIds.length > 0 && selectedRowsIds.length < rows.length}
              checked={rows.length > 0 && selectedRowsIds.length === rows.length}
              onChange={handleSelectAllClick}
              inputProps={{
                'aria-label': label,
              }}
            />
          </TableCell>
          {headerCells.map((headCell, index) => {
            return (
              <TableCell
                key={String(headCell.id)}
                align='left'
                sortDirection={sortingConfig[index].columnName === String(headCell.id) ? sortingConfig[0].sortDirection : false}
              >
                <TableSortLabel
                  active={sortingConfig[index].columnName === String(headCell.id)}
                  direction={sortingConfig[index].columnName === String(headCell.id) ? sortingConfig[0].sortDirection : SortingDirection.ASC}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {sortingConfig[index].columnName === headCell.id ? (
                    <Box
                      component='span'
                      sx={{ display: 'none' }}
                    >
                      {sortingConfig[index].sortDirection === SortingDirection.DESC ? t(`${tableName}.sortDsc`) : t(`${tableName}.sortAsc`)}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
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
          {renderHead()}
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
