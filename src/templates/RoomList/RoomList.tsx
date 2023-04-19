import { CustomTableToolbarProps, HeadCell, SortingRule } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { useState } from 'react';

export function RoomList() {
  const [sortingConfig, setSortingConfig] = useState<SortingRule[]>([]);
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<Room[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/RoomList/testRooms.json';

  function buildCustomTableHeaderCells(): HeadCell<keyof Room>[] {
    const headerCells: HeadCell<keyof Room>[] = [];
    const row = {} as Room;
    if (row) {
      Object.keys(row).forEach((key) => {
        headerCells.push({ id: key as keyof Room, label: key });
      });
    }
    return headerCells;
  }

  function buildCustomTableSortingConfig(): SortingRule[] {
    const rowConfigs: SortingRule[] = [];
    const row = {} as Room;

    Object.keys(row).forEach((key) => {
      rowConfigs.push({ columnName: key, sortDirection: SortingDirection.ASC });
    });
    return rowConfigs;
  }

  const toolbarProps: CustomTableToolbarProps<Room> = { allRows: initialRows, selected: selectedRowsIds };

  const headerCells = buildCustomTableHeaderCells();
  setSortingConfig(buildCustomTableSortingConfig());
  return (
    <CustomTable<Room>
      fetchUrl={url}
      headerCells={headerCells}
      toolbar={<RoomListToolbar {...toolbarProps} />}
      sortingConfig={sortingConfig}
      selectedRowsIds={selectedRowsIds}
      page={page}
      tableName={'roomList'}
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
