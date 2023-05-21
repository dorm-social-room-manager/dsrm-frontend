import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';
import { CustomTableProps, IdentifiableObject } from '../CustomTable/CustomTable.types';
import { SortingDirection } from '../../common/utils/SortingDirection';
import { t } from 'i18next';

export function CustomTableHead<T extends IdentifiableObject>(props: CustomTableProps<T>) {
  const { columnConfig, selectedRowsIds, rows, setColumnConfig, setSelectedRowsIds, tableName } = props;

  const isSelected = (row: T) => {
    const selectedItems = selectedRowsIds.filter((item) => {
      return row.id === item;
    });
    return selectedItems.length > 0;
  };

  const createSortHandler = (property: keyof T) => {
    return (event: MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };
  };

  function updateSortingRule(index: number, keyName: string, sortDirection: SortingDirection) {
    const updatedConfig = [...columnConfig];
    updatedConfig.splice(index, 1, { id: keyName as keyof T, label: keyName.toUpperCase(), sortDirection: sortDirection });
    setColumnConfig(updatedConfig);
  }

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      //check whether the rows have been selected
      const newSelectedRowsIds: readonly string[] = rows
        .map((row) => {
          return !isSelected(row) ? row.id : -1;
        })
        .filter((index) => {
          return index !== -1;
        })
        .map((index) => {
          return String(index);
        });

      setSelectedRowsIds(selectedRowsIds.concat(newSelectedRowsIds));
      return;
    }

    setSelectedRowsIds(
      selectedRowsIds.filter((rowId) => {
        return !rows.find((item) => {
          return item.id === rowId;
        });
      })
    );
  };

  const handleRequestSort = (_event: MouseEvent<unknown>, property: keyof T) => {
    const idx = columnConfig.findIndex((config) => {
      return config.id === property;
    });

    const isAsc = columnConfig[idx].id === property && columnConfig[idx].sortDirection === SortingDirection.ASC;
    const newSortingDirection = isAsc ? SortingDirection.DESC : SortingDirection.ASC;

    updateSortingRule(idx, String(property), newSortingDirection);

    /* when backend synchronization will be done, this will send out a REST request*/
  };

  const label = t(`${tableName}.selectAll`);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={selectedRowsIds.length > 0 && selectedRowsIds.length < rows.length}
            checked={rows.length > 0 && selectedRowsIds.length === rows.length}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': label,
            }}
          />
        </TableCell>
        {columnConfig.map((configItem, index) => {
          return (
            <TableCell
              key={String(configItem.id)}
              align='left'
              sortDirection={columnConfig[index].id === String(configItem.id) ? columnConfig[0].sortDirection : false}
            >
              <TableSortLabel
                active={columnConfig[index].id === String(configItem.id)}
                direction={columnConfig[index].id === String(configItem.id) ? columnConfig[0].sortDirection : SortingDirection.ASC}
                onClick={createSortHandler(configItem.id)}
              >
                {configItem.label}
                {columnConfig[index].id === configItem.id ? (
                  <Box
                    component='span'
                    sx={{ display: 'none' }}
                  >
                    {columnConfig[index].sortDirection === SortingDirection.DESC ? t(`${tableName}.sortDsc`) : t(`${tableName}.sortAsc`)}
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
