import * as React from 'react';
import { ChangeEvent, MouseEvent } from 'react';
import { CustomTableHeadProps, CustomTableProps, CustomTableStatefulVariables, CustomTableToolbarProps } from '../../common/types/TableTypes.types';
import { CustomTable } from '../CustomTable/CustomTable';
import { RoomData } from '../../common/types/TableTypes.types';
import { RoomListHead } from './RoomListHead';
import { RoomListToolbar } from './RoomListToolbar';
import { SortingDirection } from '../../common/utils/SortingDirection';

export function RoomList(): React.ReactElement<React.FC<CustomTableToolbarProps<RoomData>>> {
  const [order, setOrder] = React.useState<SortingDirection>(SortingDirection.ASC);
  const [orderBy, setOrderBy] = React.useState<keyof RoomData>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<RoomData[]>([]);
  const defaultRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const url = '../src/components/RoomList/testRooms.json';

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof RoomData) => {
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

  const roomListStatefulVariables: CustomTableStatefulVariables<RoomData> = {
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

  const headProps: CustomTableHeadProps<RoomData> = {
    numSelected: selected.length,
    onRequestSort: handleRequestSort,
    onSelectAllClick: handleSelectAllClick,
    order: order,
    orderBy: orderBy,
    rowCount: rows.length,
  };
  const toolbarProps: CustomTableToolbarProps<RoomData> = { allRows: rows, allSelected: selected };
  const tableProps: CustomTableProps<RoomData> = {
    customTableStatefulVariables: roomListStatefulVariables,
    fetchUrl: url,
    head: <RoomListHead {...headProps} />,
    toolbar: <RoomListToolbar {...toolbarProps} />,
  };

  return <CustomTable<RoomData> {...tableProps} />;
}
