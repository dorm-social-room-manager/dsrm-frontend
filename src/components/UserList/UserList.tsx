import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Data, SortingDirection } from './UserList.types';
import Checkbox from '@mui/material/Checkbox';
import { FetchError } from '../../errors/FetchError';
import { UserListHead } from './UserListHead';
import { UserListToolbar } from './UserListToolbar';

function descendingComparator<T>(firstValue: T, secondValue: T, orderBy: keyof T) {
  if (secondValue[orderBy] < firstValue[orderBy]) {
    return -1;
  }
  if (secondValue[orderBy] > firstValue[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator<Key extends keyof Data>(
  order: SortingDirection,
  orderBy: Key
): (firstValue: { [key in Key]: number | string }, secondValue: { [key in Key]: number | string }) => number {
  return order === SortingDirection.DESC
    ? (firstValue, secondValue) => {
        return descendingComparator(firstValue, secondValue, orderBy);
      }
    : (firstValue, secondValue) => {
        return -descendingComparator(firstValue, secondValue, orderBy);
      };
}

export function UserList() {
  const [order, setOrder] = useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = useState<keyof Data>('id');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<Data[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const pixelHeightPerRow = 53;
  const rowsPerPageArray = [5, 10, 25];

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === SortingDirection.ASC;
    setOrder(isAsc ? SortingDirection.DESC : SortingDirection.ASC);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: readonly number[] = rows.map((n: { id: number }) => {
        return n.id;
      });
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: MouseEvent<unknown>, id: number) => {
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

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => {
    return selected.indexOf(id) !== -1;
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    fetch('../src/components/UserList/testUsers.json')
      .then((res) => {
        return res.json();
      })
      .then((data: Data[]) => {
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
      <UserListToolbar
        selected={selected}
        rows={rows}
      />
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
                    <TableCell
                      align='left'
                      width='200px'
                    >
                      {row.userType}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
