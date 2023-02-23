import { ChangeEvent, MouseEvent } from 'react';
import { RoomData } from '../../common/types/TableTypes.types';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface RoomListToolbarProps {
  selected: readonly number[];
  rows: readonly RoomData[];
}
export interface RoomListHeadProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof RoomData) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
}
