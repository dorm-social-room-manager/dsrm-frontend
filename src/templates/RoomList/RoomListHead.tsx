import 'i18next';
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { CustomTableHeadProps } from '../../components/CustomTable/CustomTable.types';
import { HeadCell } from '../../components/CustomTable/CustomTable.types';
import { MouseEvent } from 'react';
import { Room } from '../../common/types/componentTypes.types';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';

const headCells: readonly HeadCell<Room>[] = [
  {
    disablePadding: true,
    instance: 'roomNumber',
    label: t('roomList.roomNumber'),
  },
  {
    disablePadding: true,
    instance: 'floor',
    label: t('roomList.floor'),
  },
  {
    disablePadding: true,
    instance: 'roomType',
    label: t('roomList.roomType'),
  },
  {
    disablePadding: true,
    instance: 'maxCapacity',
    label: t('roomList.maxCapacity'),
  },
  {
    disablePadding: false,
    instance: 'keyOwner',
    label: t('roomList.keyOwner'),
  },
  {
    disablePadding: true,
    instance: 'openingTime',
    label: t('roomList.openingTime'),
  },
  {
    disablePadding: true,
    instance: 'closingTime',
    label: t('roomList.closingTime'),
  },
  {
    disablePadding: true,
    instance: 'unavailableStart',
    label: t('roomList.unavailableStart'),
  },
  {
    disablePadding: true,
    instance: 'unavailableEnd',
    label: t('roomList.unavailableEnd'),
  },
];

export function RoomListHead(props: CustomTableHeadProps<Room>) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Room) => {
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
