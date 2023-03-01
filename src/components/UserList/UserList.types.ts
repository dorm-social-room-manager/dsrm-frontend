import { ChangeEvent, MouseEvent } from 'react';

export enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export interface Data {
  id: number;
  name: string;
  surname: string;
  email: string;
  roomNumber: number;
  roles: string;
  rolesId: string;
}
export interface UserListToolbarProps {
  selected: readonly Data[];
}
export interface UserListHeadProps {
  numSelectedOnPage: number;
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
