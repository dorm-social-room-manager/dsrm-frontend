import { ChangeEvent, MouseEvent } from 'react';
import { ReactElement } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface HeadCell<T extends { id?: string }> {
  disablePadding: boolean;
  instance: keyof T;
  label: string;
}

export interface CustomTableToolbarProps<T extends { id?: string }> {
  allSelected: readonly T[];
  allRows: readonly T[];
}
export interface CustomTableHeadProps<T extends { id?: string }> {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rowCount: number;
  // onSortCallback: (headCellName: string, direction: SortingDirection) => void; // will be used later, when we synchronize lists with backend
}

export interface CustomTableProps<T> {
  toolbar: ReactElement;
  head: ReactElement;
  fetchUrl: string;
  customTableStatefulVariables: CustomTableStatefulVariables<T>;
}

export interface CustomTableStatefulVariables<T> {
  order: SortingDirection;
  orderBy: keyof T;
  selected: readonly T[];
  page: number;
  rows: T[];
  rowsPerPage: number;
  setOrder: (value: SortingDirection) => void;
  setOrderBy: (value: keyof T) => void;
  setSelected: (value: readonly T[]) => void;
  setPage: (value: number) => void;
  setRows: (value: T[]) => void;
  setRowsPerPage: (value: number) => void;
}
