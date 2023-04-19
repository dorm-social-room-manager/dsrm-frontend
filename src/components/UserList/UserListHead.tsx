import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { HeadCell, SortingDirection, UserListHeadProps } from './UserList.types';
import { MouseEvent } from 'react';
import { t } from 'i18next';
import { UserDTO } from '../../common/types/OperationTypes.types';

export function UserListHead(props: UserListHeadProps) {
  const { onSelectAllClick, order, orderBy, numSelectedOnPage, rows, onRequestSort } = props;
  const headCells: HeadCell<keyof UserDTO>[] = [
    {
      disablePadding: true,
      id: 'name',
      label: t(`userList.name`),
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
      id: 'roomNumber',
      label: t('userList.roomNumber'),
    },
    {
      disablePadding: true,
      id: 'roles',
      label: t('userList.userType'),
    },
  ];
  const createSortHandler = (property: keyof UserDTO) => {
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
            indeterminate={numSelectedOnPage > 0 && numSelectedOnPage < rows.length}
            checked={rows.length > 0 && numSelectedOnPage === rows.length}
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
