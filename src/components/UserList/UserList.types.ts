import { ChangeEvent, MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { UserData } from '../../common/types/TableTypes.types';

export interface UserListToolbarProps {
  selected: readonly number[];
  rows: readonly UserData[];
}
export interface UserListHeadProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof UserData) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
}
