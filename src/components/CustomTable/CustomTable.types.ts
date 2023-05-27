import { ChangeEvent, MouseEvent } from 'react';
import { ReactElement } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export type IdentifiableObject = Record<PropertyKey, unknown> & { id?: string };

export enum UserTypesId {
  ADMIN = '1',
}

export enum RoomTypesId {
  NORMAL_ROOM = '1',
  TV_ROOM = '2',
  GYM_ROOM = '3',
}

export interface CustomTableToolbarProps<T extends IdentifiableObject> {
  selected: readonly string[];
  allRows: readonly T[];
}

export interface CustomTableHeadProps<T extends IdentifiableObject> {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
}

export interface CustomTableProps<T extends IdentifiableObject> {
  toolbar: ReactElement;
  columnConfig: ColumnConfig<T, keyof T>[];
  fetchUrl: string;
  selectedRowsIds: readonly string[];
  page: number;
  tableName: string;
  rows: T[];
  rowsPerPage: number;
  setColumnConfig: (value: ColumnConfig<T, keyof T>[]) => void;
  setSelectedRowsIds: (value: readonly string[]) => void;
  setPage: (value: number) => void;
  setRowsPerPage: (value: number) => void;
  setRows: (value: T[]) => void;
}

export interface ColumnConfig<T extends IdentifiableObject, V extends keyof T> {
  id: V;
  label: string;
  rowDisplayValue: (rowValue: T[V]) => string;
  sortDirection: SortingDirection;
}
