import * as React from 'react';

export type Order = 'asc' | 'desc';
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
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}
