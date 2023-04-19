/* eslint-disable sort-keys */
import { CustomTableToolbarProps, HeadCell, SortingRule } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { useState } from 'react';

export function RoomList() {
  const [sortingConfig, setSortingConfig] = useState<SortingRule[]>(buildCustomTableSortingConfig());
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<Room[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/RoomList/testRooms.json';

  function buildCustomTableHeaderCells(): HeadCell<keyof Room>[] {
    const headerCells: HeadCell<keyof Room>[] = [];
    const row = {
      id: '1234',
      roomNumber: 101,
      floor: 1,
      roomType: {
        id: '5678',
        name: 'Standard',
      },
      maxCapacity: 4,
      keyOwner: {
        id: 'abcd',
        email: 'john.doe@example.com',
        password: 'password123',
        name: 'John',
        surname: 'Doe',
        roomNumber: 101,
        roles: [],
      },
      openingTime: {
        hour: 9,
        minute: 0,
        second: 0,
        nano: 0,
      },
      closingTime: {
        hour: 21,
        minute: 0,
        second: 0,
        nano: 0,
      },
      unavailableStart: '2023-05-01',
      unavailableEnd: '2023-05-05',
    } as Room;

    Object.keys(row).forEach((key) => {
      headerCells.push({ id: key as keyof Room, label: key });
    });

    return headerCells;
  }

  function buildCustomTableSortingConfig(): SortingRule[] {
    const rowConfigs: SortingRule[] = [];
    const row = {
      id: '1234',
      roomNumber: 101,
      floor: 1,
      roomType: {
        id: '5678',
        name: 'Standard',
      },
      maxCapacity: 4,
      keyOwner: {
        id: 'abcd',
        email: 'john.doe@example.com',
        password: 'password123',
        name: 'John',
        surname: 'Doe',
        roomNumber: 101,
        roles: [],
      },
      openingTime: {
        hour: 9,
        minute: 0,
        second: 0,
        nano: 0,
      },
      closingTime: {
        hour: 21,
        minute: 0,
        second: 0,
        nano: 0,
      },
      unavailableStart: '2023-05-01',
      unavailableEnd: '2023-05-05',
    } as Room;

    Object.keys(row).forEach((key) => {
      rowConfigs.push({ columnName: key, sortDirection: SortingDirection.ASC });
    });
    return rowConfigs;
  }

  const toolbarProps: CustomTableToolbarProps<Room> = { allRows: initialRows, selected: selectedRowsIds };

  const headerCells = buildCustomTableHeaderCells();
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
