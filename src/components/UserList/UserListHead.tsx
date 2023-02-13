import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Data, HeadCell, SortingDirection, UserListHeadProps } from './UserList.types';
import { MouseEvent } from 'react';
import { t } from 'i18next';

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
    return (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  };
  const label = t('userList.selectAll');
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
              'aria-label': label,
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
                direction={orderBy === headCell.id ? order : SortingDirection.ASC}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box
                    component='span'
                    sx={{ display: 'none' }}
                  >
                    {order === SortingDirection.DESC ? t('userList.sortDsc') : t('userList.sortAsc')}
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
