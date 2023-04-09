import { ChangeEvent, MouseEvent } from 'react';

export enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export enum UserTypesId {
  ADMIN = '1',
  PENDING = '2',
}
export interface Data {
  id?: number | undefined;
  name: string | undefined;
  surname?: string | undefined;
  email?: string | undefined;
  roomNumber?: number | undefined;
  roles?: string | undefined;
  rolesId?: string | undefined;
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
  rows: Data[];
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}
