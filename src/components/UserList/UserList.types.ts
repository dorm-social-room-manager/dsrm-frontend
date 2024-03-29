import { ChangeEvent, MouseEvent } from 'react';
import { UserDTO } from '../../common/types/OperationTypes.types';
export enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export enum UserTypesId {
  ADMIN = '1',
}
export interface UserListToolbarProps {
  selected: readonly UserDTO[];
}
export interface UserListHeadProps {
  numSelectedOnPage: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof UserDTO) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: SortingDirection;
  orderBy: string;
  rows: UserDTO[];
}

export interface HeadCell<T extends keyof UserDTO> {
  disablePadding: boolean;
  id: T;
  label: string;
}
