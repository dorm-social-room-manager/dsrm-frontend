import { ChangeEvent, MouseEvent } from 'react';
import { ReactElement } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';

export interface HeadCell<T extends PropertyKey> {
  id: T;
  label: string;
}

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
  headerCells: HeadCell<keyof T>[];
  fetchUrl: string;
  sortingConfig: SortingRule[];
  selectedRowsIds: readonly string[];
  page: number;
  tableName: string;
  rows: T[];
  rowsPerPage: number;
  setSortingConfig: (value: SortingRule[]) => void;
  setSelectedRowsIds: (value: readonly string[]) => void;
  setPage: (value: number) => void;
  setRowsPerPage: (value: number) => void;
  setRows: (value: T[]) => void;
}

export interface SortingRule {
  columnName: string;
  sortDirection: SortingDirection;
}
