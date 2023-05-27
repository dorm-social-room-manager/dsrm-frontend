import { ColumnConfig, IdentifiableObject } from '../CustomTable/CustomTable.types';
import { MouseEvent } from 'react';

export interface CustomTableRowProps<T extends IdentifiableObject> {
  columnConfig: ColumnConfig<T, keyof T>[];
  row: T;
  rowIdx: number;
  isSelected: boolean;
  handleClick: (event: MouseEvent<unknown>, row: T) => void;
}
