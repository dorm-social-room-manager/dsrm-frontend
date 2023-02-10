import { ChangeEvent, MouseEvent } from 'react';

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
export interface Data {
  id: number;
  name: string;
  surname: string;
  email: string;
  room: number;
  userType: string;
}
export interface UserListToolbarProps {
  numSelected: number;
}
export interface UserListHeadProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}
