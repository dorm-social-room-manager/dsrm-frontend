import { ColumnConfig, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { useState } from 'react';

export function RoomList() {
  const [columnConfig, setColumnConfig] = useState<ColumnConfig<keyof Room>[]>(buildCustomTableColumnConfig());
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<Room[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/RoomList/testRooms.json';

  function buildCustomTableColumnConfig(): ColumnConfig<keyof Room>[] {
    const columnConfigArr: ColumnConfig<keyof Room>[] = [];
    const row = {
      closingTime: {
        hour: 21,
        minute: 0,
        nano: 0,
        second: 0,
      },
      floor: 1,
      id: '1234',
      keyOwner: {
        email: 'john.doe@example.com',
        id: 'abcd',
        name: 'John',
        password: 'password123',
        roles: [],
        roomNumber: 101,
        surname: 'Doe',
      },
      maxCapacity: 4,
      openingTime: {
        hour: 9,
        minute: 0,
        nano: 0,
        second: 0,
      },
      roomNumber: 101,
      roomType: {
        id: '5678',
        name: 'Standard',
      },
      unavailableEnd: '2023-05-05',
      unavailableStart: '2023-05-01',
    } as Room;

    Object.keys(row).forEach((key) => {
      columnConfigArr.push({ id: key as keyof Room, label: key.toUpperCase(), sortDirection: SortingDirection.ASC });
    });

    return columnConfigArr;
  }

  const toolbarProps: CustomTableToolbarProps<Room> = { allRows: initialRows, selected: selectedRowsIds };

  return (
    <CustomTable<Room>
      fetchUrl={url}
      toolbar={<RoomListToolbar {...toolbarProps} />}
      columnConfig={columnConfig}
      selectedRowsIds={selectedRowsIds}
      page={page}
      tableName={'roomList'}
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
