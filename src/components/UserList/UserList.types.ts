import { ChangeEvent, MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface Data {
  id: number;
  name: string;
  surname: string;
  email: string;
  room: number;
  userType: string;
}
export interface UserListToolbarProps {
  selected: readonly number[];
  rows: readonly Data[];
}
export interface UserListHeadProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}
