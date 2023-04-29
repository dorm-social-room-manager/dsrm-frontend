import { ColumnConfig, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { User } from '../../common/types/componentTypes.types';
import { UserListToolbar } from './UserListToolbar';
import { useState } from 'react';

export function UserList() {
  const [columnConfig, setColumnConfig] = useState<ColumnConfig<keyof User>[]>(buildCustomTableColumnConfig());
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<User[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/UserList/testUsers.json';

  function buildCustomTableColumnConfig(): ColumnConfig<keyof User>[] {
    const columnConfigArr: ColumnConfig<keyof User>[] = [];
    const row = { email: '', id: '', name: '', password: '', roles: [], roomNumber: 0, surname: '' } as User;

    Object.keys(row).forEach((key) => {
      columnConfigArr.push({ id: key as keyof User, label: key.toUpperCase(), sortDirection: SortingDirection.ASC });
    });

    return columnConfigArr;
  }

  const toolbarProps: CustomTableToolbarProps<User> = { allRows: initialRows, selected: selectedRowsIds };
  return (
    <CustomTable<User>
      fetchUrl={url}
      columnConfig={columnConfig}
      toolbar={<UserListToolbar {...toolbarProps} />}
      selectedRowsIds={selectedRowsIds}
      page={page}
      tableName={'userList'}
      rows={initialRows}
      rowsPerPage={rowsPerPage}
      setColumnConfig={setColumnConfig}
      setSelectedRowsIds={setSelectedRowsIds}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      setRows={setRows}
    />
  );
}
