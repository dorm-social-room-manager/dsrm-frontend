import { ColumnConfig, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { User } from '../../common/types/componentTypes.types';
import { UserListToolbar } from './UserListToolbar';
import { useState } from 'react';

export function UserList() {
  const [columnConfig, setColumnConfig] = useState<ColumnConfig<keyof User>[]>([]);
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<User[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/UserList/testUsers.json';

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
