import { ColumnConfig, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListToolbar } from './RoomListToolbar';
import { useState } from 'react';

export function RoomList() {
  const [columnConfig, setColumnConfig] = useState<ColumnConfig<keyof Room>[]>([]);
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
