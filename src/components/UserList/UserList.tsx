import * as React from 'react';
import { ChangeEvent, MouseEvent } from 'react';
import { CustomTableHeadProps, CustomTableProps, CustomTableStatefulVariables, CustomTableToolbarProps } from '../../common/types/TableTypes.types';
import { CustomTable } from '../CustomTable/CustomTable';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { UserData } from '../../common/types/TableTypes.types';
import { UserListHead } from './UserListHead';
import { UserListToolbar } from './UserListToolbar';

export function UserList(): React.ReactElement<React.FC<CustomTableToolbarProps<UserData>>> {
  const [order, setOrder] = React.useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = React.useState<keyof UserData>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<UserData[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const url = '../src/components/UserList/testUsers.json';

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof UserData) => {
    const isAsc = orderBy === property && order === SortingDirection.ASC;
    setOrder(isAsc ? SortingDirection.DESC : SortingDirection.ASC);
    setOrderBy(property);
    /* when backend synchronization will be done, this will send out a REST request*/
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

  const userListStatefulVariables: CustomTableStatefulVariables<UserData> = {
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

  const headProps: CustomTableHeadProps<UserData> = {
    numSelected: selected.length,
    onRequestSort: handleRequestSort,
    onSelectAllClick: handleSelectAllClick,
    order: order,
    orderBy: orderBy,
    rowCount: rows.length,
  };
  const toolbarProps: CustomTableToolbarProps<UserData> = { allRows: rows, allSelected: selected };
  const tableProps: CustomTableProps<UserData> = {
    customTableStatefulVariables: userListStatefulVariables,
    fetchUrl: url,
    head: <UserListHead {...headProps} />,
    toolbar: <UserListToolbar {...toolbarProps} />,
  };

  return <CustomTable<UserData> {...tableProps} />;
}
