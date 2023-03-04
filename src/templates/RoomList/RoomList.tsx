import { ChangeEvent, MouseEvent, useState } from 'react';
import { CustomTableHeadProps, CustomTableStatefulVariables, CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import { CustomTable } from '../../components/CustomTable/CustomTable';
import { Room } from '../../common/types/componentTypes.types';
import { RoomListHead } from './RoomListHead';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';

export function RoomList() {
  const [order, setOrder] = useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = useState<keyof Room>('id');
  const [selected, setSelected] = useState<readonly Room[]>([]);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<Room[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const url = '../src/templates/RoomList/testRooms.json';

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Room) => {
    const isAsc = orderBy === property && order === SortingDirection.ASC;
    setOrder(isAsc ? SortingDirection.DESC : SortingDirection.ASC);
    setOrderBy(property);
    /* when backend synchronization will be done, this will send out a REST request*/
  };

  const isSelected = (row: Room) => {
    return (
      selected.filter((item) => {
        return item.id === row.id;
      }).length > 0
    );
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: readonly Room[] = rows.filter((row) => {
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

  const roomListStatefulVariables: CustomTableStatefulVariables<Room> = {
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

  const headProps: CustomTableHeadProps<Room> = {
    numSelected: selected.length,
    onRequestSort: handleRequestSort,
    onSelectAllClick: handleSelectAllClick,
    order: order,
    orderBy: orderBy,
    rowCount: rows.length,
  };
  const toolbarProps: CustomTableToolbarProps<Room> = { allRows: rows, allSelected: selected };

  return (
    <CustomTable<Room>
      fetchUrl={url}
      customTableStatefulVariables={roomListStatefulVariables}
      head={<RoomListHead {...headProps} />}
      toolbar={<RoomListToolbar {...toolbarProps} />}
    />
  );
}
