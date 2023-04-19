import { CustomTableToolbarProps, HeadCell, SortingRule } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { User } from '../../common/types/componentTypes.types';
import { UserListToolbar } from './UserListToolbar';
import { useState } from 'react';

export function UserList() {
  const [sortingConfig, setSortingConfig] = useState<SortingRule[]>([]);
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<User[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/UserList/testUsers.json';

  function buildCustomTableHeaderCells(): HeadCell<keyof User>[] {
    const headerCells: HeadCell<keyof User>[] = [];
    const row = {} as User;
    if (row) {
      Object.keys(row).forEach((key) => {
        headerCells.push({ id: key as keyof User, label: key });
      });
    }
    return headerCells;
  }

  function buildCustomTableSortingConfig(): SortingRule[] {
    const rowConfigs: SortingRule[] = [];
    const row = {} as User;

    Object.keys(row).forEach((key) => {
      rowConfigs.push({ columnName: key, sortDirection: SortingDirection.ASC });
    });
    return rowConfigs;
  }

  const toolbarProps: CustomTableToolbarProps<User> = { allRows: initialRows, selected: selectedRowsIds };

  const headerCells = buildCustomTableHeaderCells();
  setSortingConfig(buildCustomTableSortingConfig());
  return (
    <CustomTable<User>
      fetchUrl={url}
      headerCells={headerCells}
      toolbar={<UserListToolbar {...toolbarProps} />}
      sortingConfig={sortingConfig}
      selectedRowsIds={selectedRowsIds}
      page={page}
      tableName={'userList'}
      rows={initialRows}
      rowsPerPage={rowsPerPage}
      setSortingConfig={setSortingConfig}
      setSelectedRowsIds={setSelectedRowsIds}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      setRows={setRows}
    />
  );
}
