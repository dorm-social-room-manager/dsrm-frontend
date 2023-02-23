import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { MouseEvent } from 'react';
import { RoomData } from '../../common/types/TableTypes.types';
import { RoomHeadCell } from '../../common/types/TableTypes.types';
import { RoomListHeadProps } from './RoomList.types';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';

const headCells: readonly RoomHeadCell[] = [
  {
    disablePadding: true,
    id: 'number',
    label: t('roomList.number'),
  },
  {
    disablePadding: true,
    id: 'floor',
    label: t('roomList.floor'),
  },
  {
    disablePadding: true,
    id: 'type',
    label: t('roomList.type'),
  },
  {
    disablePadding: false,
    id: 'keyOwner',
    label: t('roomList.keyOwner'),
  },
  {
    disablePadding: true,
    id: 'openingHours',
    label: t('roomList.openingHours'),
  },
  {
    disablePadding: true,
    id: 'capacity',
    label: t('roomList.capacity'),
  },
];

export function RoomListHead(props: RoomListHeadProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof RoomData) => {
    return (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  };
  const label = t('roomList.selectAll');
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
                    {order === SortingDirection.DESC ? t('roomList.sortDsc') : t('roomList.sortAsc')}
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
