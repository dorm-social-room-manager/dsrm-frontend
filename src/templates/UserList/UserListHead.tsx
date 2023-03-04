import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { CustomTableHeadProps } from '../../components/CustomTable/CustomTable.types';
import { HeadCell } from '../../components/CustomTable/CustomTable.types';
import { MouseEvent } from 'react';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';
import { User } from '../../common/types/componentTypes.types';

const headCells: readonly HeadCell<User>[] = [
  {
    disablePadding: true,
    instance: 'email',
    label: t('userList.email'),
  },
  {
    disablePadding: true,
    instance: 'password',
    label: t('userList.password'),
  },
  {
    disablePadding: true,
    instance: 'name',
    label: t('userList.name'),
  },
  {
    disablePadding: true,
    instance: 'surname',
    label: t('userList.surname'),
  },
  {
    disablePadding: false,
    instance: 'roomNumber',
    label: t('userList.roomNumber'),
  },
  {
    disablePadding: true,
    instance: 'roles',
    label: t('userList.userType'),
  },
];

export function UserListHead(props: CustomTableHeadProps<User>) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof User) => {
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
              key={headCell.instance}
              align='left'
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.instance ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.instance}
                direction={orderBy === headCell.instance ? order : SortingDirection.ASC}
                onClick={createSortHandler(headCell.instance)}
              >
                {headCell.label}
                {orderBy === headCell.instance ? (
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
