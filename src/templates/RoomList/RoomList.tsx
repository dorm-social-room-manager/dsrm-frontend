import { ColumnConfig, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { useState } from 'react';

type UserColumnConfig = [
  ColumnConfig<Room, 'roomType'>,
  ColumnConfig<Room, 'keyOwner'>,
  ColumnConfig<Room, 'id'>,
  ColumnConfig<Room, 'roomNumber'>,
  ColumnConfig<Room, 'maxCapacity'>,
  ColumnConfig<Room, 'openingTime'>,
  ColumnConfig<Room, 'closingTime'>,
  ColumnConfig<Room, 'unavailableStart'>,
  ColumnConfig<Room, 'unavailableEnd'>
];

function generateCallback<T, K extends keyof T>(
  id: K,
  label: string,
  rowDisplayValue: (element: T[K]) => string = (element: T[K]) => {
    return String(element);
  }
) {
  return {
    id: id,
    label: label,
    rowDisplayValue: rowDisplayValue,
    sortDirection: SortingDirection.ASC,
  };
}

const callbacks: UserColumnConfig = [
  generateCallback<Room, 'roomType'>('roomType', 'Room Type', (element: Room['keyOwner']) => {
    if (!element || !element.name) {
      return '';
    }
    return element.name;
  }),
  generateCallback<Room, 'keyOwner'>('keyOwner', 'Key Owner', (element: Room['keyOwner']) => {
    if (!element || !element.name || !element.surname) {
      return '';
    }
    return `${element.name} ${element.surname}`;
  }),
  generateCallback<Room, 'id'>('id', 'ID'),
  generateCallback<Room, 'roomNumber'>('roomNumber', 'Room Number'),
  generateCallback<Room, 'maxCapacity'>('maxCapacity', 'Max Capacity'),
  generateCallback<Room, 'openingTime'>('openingTime', 'Opening Time'),
  generateCallback<Room, 'closingTime'>('closingTime', 'Closing Time'),
  generateCallback<Room, 'unavailableStart'>('unavailableStart', 'Unavailable Start'),
  generateCallback<Room, 'unavailableEnd'>('unavailableEnd', 'Unavailable End'),
];

const callbacks1 = [
  {
    id: 'roomType',
    label: 'Room Type',
    rowDisplayValue: (element: Room['keyOwner']) => {
      if (!element || !element.name) {
        return '';
      }
      return element.name;
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'keyOwner',
    label: 'Key Owner',
    rowDisplayValue: (element: Room['keyOwner']) => {
      if (!element || !element.name || !element.surname) {
        return '';
      }
      return `${element.name} ${element.surname}`;
    },
    sortDirection: SortingDirection.ASC,
  },

  {
    id: 'id',
    label: 'ID',
    rowDisplayValue: (element: Room['id']) => {
      if (!element) {
        return '';
      }
      return element;
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'roomNumber',
    label: 'Room Number',
    rowDisplayValue: (element: Room['roomNumber']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'maxCapacity',
    label: 'Max Capacity',
    rowDisplayValue: (element: Room['maxCapacity']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'openingTime',
    label: 'Opening Time',
    rowDisplayValue: (element: Room['openingTime']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'closingTime',
    label: 'Closing Time',
    rowDisplayValue: (element: Room['closingTime']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'unavailableStart',
    label: 'Unavailable Start',
    rowDisplayValue: (element: Room['unavailableStart']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
  {
    id: 'unavailableEnd',
    label: 'Unavailable End',
    rowDisplayValue: (element: Room['unavailableEnd']) => {
      if (!element) {
        return '';
      }
      return String(element);
    },
    sortDirection: SortingDirection.ASC,
  },
];

export function RoomList() {
  console.log(x);
  const [columnConfig, setColumnConfig] = useState<UserColumnConfig>(callbacks);
  const [selectedRowsIds, setSelectedRowsIds] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [initialRows, setRows] = useState<Room[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/RoomList/testRooms.json';

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
