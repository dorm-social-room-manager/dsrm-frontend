import * as React from 'react';
import { ChangeEvent, MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface RoomData {
  id: number;
  number: number;
  floor: number;
  type: string;
  keyOwner: string;
  openingHours: string;
  capacity: number;
}

export interface UserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  room: number;
  userType: string;
}

export interface HeadCell<T extends { id: number }> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
}

export interface CustomTableToolbarProps<T extends { id: number }> {
  allSelected: readonly number[];
  allRows: readonly T[];
}
export interface CustomTableHeadProps<T extends { id: number }> {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
  // onSortCallback: (headCellName: string, direction: SortingDirection) => void; // will be used later, when we synchronize lists with backend
}

export interface CustomTableProps<Type> {
  toolbar: React.ReactElement;
  head: React.ReactElement;
  fetchUrl: string;
  customTableStatefulVariables: CustomTableStatefulVariables<Type>;
}

export interface CustomTableStatefulVariables<Type> {
  order: SortingDirection;
  orderBy: keyof Type;
  selected: readonly number[];
  page: number;
  rows: Type[];
  rowsPerPage: number;
  setOrder: (value: SortingDirection) => void;
  setOrderBy: (value: keyof Type) => void;
  setSelected: (value: readonly number[]) => void;
  setPage: (value: number) => void;
  setRows: (value: Type[]) => void;
  setRowsPerPage: (value: number) => void;
}
