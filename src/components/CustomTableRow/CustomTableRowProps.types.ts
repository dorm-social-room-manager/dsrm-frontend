import { ColumnConfig } from '../CustomTable/CustomTable.types';
import { MouseEvent } from 'react';

export interface CustomTableRowProps<T extends Record<PropertyKey, unknown>> {
  columnConfig: ColumnConfig<keyof T>[];
  row: T;
  rowIdx: number;
  isSelected: boolean;
  handleClick: (event: MouseEvent<unknown>, row: T) => void;
}
