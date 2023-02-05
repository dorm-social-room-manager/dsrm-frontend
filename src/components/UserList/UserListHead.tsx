import 'i18next';
import * as React from 'react';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Data, HeadCell, UserListHeadProps } from './UserList.types';
import { t } from 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const headCells: readonly HeadCell[] = [
  {
    disablePadding: true,
    id: 'name',
    label: t('userList.name'),
  },
  {
    disablePadding: true,
    id: 'surname',
    label: t('userList.surname'),
  },
  {
    disablePadding: true,
    id: 'email',
    label: t('userList.email'),
  },
  {
    disablePadding: false,
    id: 'room',
    label: t('userList.roomNumber'),
  },
  {
    disablePadding: true,
    id: 'userType',
    label: t('userList.userType'),
  },
];

export function UserListHead(props: UserListHeadProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => {
    return (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': t('userList.selectAll'),
            }}
          />
        </TableCell>
        {headCells.map((headCell) => {
          return (
            <TableCell
              key={headCell.id}
              align='left'
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box
                    component='span'
                    sx={{ display: 'none' }}
                  >
                    {order === 'desc' ? t('userList.sortDsc') : t('userList.sortAsc')}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
