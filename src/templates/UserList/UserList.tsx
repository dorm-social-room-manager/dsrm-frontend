import { ChangeEvent, MouseEvent, useState } from 'react';
import { CustomTableHeadProps, CustomTableStatefulVariables, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { User } from '../../common/types/componentTypes.types';
import { UserListHead } from './UserListHead';
import { UserListToolbar } from './UserListToolbar';

export function UserList() {
  const [order, setOrder] = useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = useState<keyof User>('id');
  const [selected, setSelected] = useState<readonly User[]>([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<User[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/UserList/testUsers.json';

  const handleRequestSort = (_event: MouseEvent<unknown>, property: keyof User) => {
    const isAsc = orderBy === property && order === SortingDirection.ASC;
    setOrder(isAsc ? SortingDirection.DESC : SortingDirection.ASC);
    setOrderBy(property);
    /* when backend synchronization will be done, this will send out a REST request*/
  };

  const isSelected = (row: User) => {
    return (
      selected.filter((item) => {
        return item.id === row.id;
      }).length > 0
    );
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: readonly User[] = rows.filter((row) => {
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

  const userListStatefulVariables: CustomTableStatefulVariables<User> = {
    order,
    orderBy,
    page,
    rows,
    rowsPerPage,
    selected,
    setOrder,
    setOrderBy,
    setPage,
    setRows,
    setRowsPerPage,
    setSelected,
  };

  const headProps: CustomTableHeadProps<User> = {
    numSelected: selected.length,
    onRequestSort: handleRequestSort,
    onSelectAllClick: handleSelectAllClick,
    order: order,
    orderBy: orderBy,
    rowCount: rows.length,
  };
  const toolbarProps: CustomTableToolbarProps<User> = { allRows: rows, allSelected: selected };

  return (
    <CustomTable<User>
      fetchUrl={url}
      customTableStatefulVariables={userListStatefulVariables}
      head={<UserListHead {...headProps} />}
      toolbar={<UserListToolbar {...toolbarProps} />}
    />
  );
}
