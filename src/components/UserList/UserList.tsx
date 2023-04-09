import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Data, SortingDirection } from './UserList.types';
import Checkbox from '@mui/material/Checkbox';
import { useIsFetching } from '@tanstack/react-query';
import { useReadUsersMutation } from '../../common/services/UserService/UserService';
import { UserListHead } from './UserListHead';
import { UserListToolbar } from './UserListToolbar';

export function UserList() {
  const [order, setOrder] = useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = useState<keyof Data>('id');
  const [selected, setSelected] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<Data[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const pixelHeightPerRow = 53;
  const rowsPerPageArray = [5, 10, 25];

  const handleInputData = (data: Data[], totalElements: number) => {
    setRows(data);
    setTotalUsers(totalElements);
  };
  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === SortingDirection.ASC;
    setOrder(isAsc ? SortingDirection.DESC : SortingDirection.ASC);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: Data[] = rows.filter((row) => {
        return !isSelected(row);
      });
      setSelected(selected.concat(newSelected));
      return;
    }
    setSelected(
      selected.filter((row) => {
        return !rows.find((item) => {
          return item.id === row.id;
        });
      })
    );
  };

  const handleClick = (event: MouseEvent<unknown>, row: Data) => {
    const selectedIndex = selected.indexOf(
      selected.find((item) => {
        return item.id === row.id;
      }) as Data
    );
    let newSelected: Data[] = [];

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (row: Data) => {
    return (
      selected.filter((item) => {
        return item.id === row.id;
      }).length > 0
    );
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalUsers) : 0;

  const { mutate } = useReadUsersMutation(handleInputData);

  useEffect(() => {
    mutate({ query: { page: page, size: rowsPerPage, sort: [orderBy, order] } });
  }, [orderBy, order, page, rowsPerPage, mutate]);
  const isFetching = useIsFetching();
  if (isFetching || rows.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      width='100%'
      height='100%'
    >
      <UserListToolbar selected={selected} />
      <TableContainer>
        <Table>
          <UserListHead
            numSelectedOnPage={
              selected.filter((item) => {
                return (
                  item.id ===
                  rows.find((row) => {
                    return row.id === item.id;
                  })?.id
                );
              }).length
            }
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rows={rows}
          />
          <TableBody>
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => {
                    return handleClick(event, row);
                  }}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
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
                  <TableCell
                    component='th'
                    id={labelId}
                    scope='row'
                    padding='none'
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align='left'>{row.surname}</TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell align='left'>{row.roomNumber}</TableCell>
                  <TableCell
                    align='left'
                    width='200px'
                  >
                    {row.roles}
                  </TableCell>
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
        count={totalUsers}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
