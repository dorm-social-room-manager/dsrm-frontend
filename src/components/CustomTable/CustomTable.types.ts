import { ChangeEvent, MouseEvent } from 'react';
import { ReactElement } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface CustomTableToolbarProps<T extends Record<PropertyKey, unknown>> {
  selected: readonly string[];
  allRows: readonly T[];
}

export interface CustomTableHeadProps<T extends Record<PropertyKey, unknown>> {
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
  columnConfig: ColumnConfig<keyof T>[];
  fetchUrl: string;
  selectedRowsIds: readonly string[];
  page: number;
  tableName: string;
  rows: T[];
  rowsPerPage: number;
  setColumnConfig: (value: SortingRule<keyof T>[]) => void;
  setSelectedRowsIds: (value: readonly string[]) => void;
  setPage: (value: number) => void;
  setRowsPerPage: (value: number) => void;
  setRows: (value: T[]) => void;
}

export interface SortingRule<T extends PropertyKey> {
  id: T;
  sortDirection: SortingDirection;
}

export interface ColumnConfig<T extends PropertyKey> {
  id: T;
  label: string;
  sortDirection: SortingDirection;
}
