import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Data, HeadCell, SortingDirection, UserListHeadProps } from './UserList.types';
import { MouseEvent } from 'react';
import { t } from 'i18next';

export function UserListHead(props: UserListHeadProps) {
  const { onSelectAllClick, order, orderBy, numSelectedOnPage, rows, onRequestSort } = props;
  const keys = Object.keys(rows[0]);
  const filteredKeys = keys.filter((key, index) => {
    return [0, 2, 3, 4, 5, 6].includes(index);
  });
  console.log(filteredKeys);
  const headCells: HeadCell[] = [
    {
      disablePadding: true,
      id: filteredKeys[1] as keyof Data,
      label: t('userList.name'),
    },
    {
      disablePadding: true,
      id: filteredKeys[5] as keyof Data,
      label: t('userList.surname'),
    },
    {
      disablePadding: true,
      id: filteredKeys[0] as keyof Data,
      label: t('userList.email'),
    },
    {
      disablePadding: false,
      id: filteredKeys[4] as keyof Data,
      label: t('userList.roomNumber'),
    },
    {
      disablePadding: true,
      id: filteredKeys[2] as keyof Data,
      label: t('userList.userType'),
    },
  ];
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
