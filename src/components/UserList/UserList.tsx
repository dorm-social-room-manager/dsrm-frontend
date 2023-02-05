import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { Data, Order } from './UserList.types';
import Checkbox from '@mui/material/Checkbox';
import { UserListHead } from './UserListHead';
import { UserListToolbar } from './UserListToolbar';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator<Key extends keyof Data>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => {
        return descendingComparator(a, b, orderBy);
      }
    : (a, b) => {
        return -descendingComparator(a, b, orderBy);
      };
}

export function UserList() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<Data[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const pixelHeightPerRow = 53;
  const fivePerPage = 5;
  const tenPerPage = 10;
  const twentyFivePerPage = 25;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: readonly number[] = rows.map((n: { id: number }) => {
        return n.id;
      });
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => {
    return selected.indexOf(id) !== -1;
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  React.useEffect(() => {
    fetch('../src/components/UserList/testUsers.json')
      .then((res) => {
        return res.json();
      })
      .then((data: Data[]) => {
        return setRows(data);
      })
      .catch(() => {
        return 'obligatory catch';
      });
  });

  return (
    <Box
      width='100%'
      height='100%'
    >
      <UserListToolbar numSelected={selected.length} />
      <TableContainer>
        <Table>
          <UserListHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              .sort(getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => {
                      return handleClick(event, row.id);
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
                    <TableCell align='left'>{row.room}</TableCell>
                    <TableCell align='left'>{row.userType}</TableCell>
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
        rowsPerPageOptions={[fivePerPage, tenPerPage, twentyFivePerPage]}
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
