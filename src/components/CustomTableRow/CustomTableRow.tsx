import { Checkbox, TableCell, TableRow } from '@mui/material';
import { CustomTableRowProps } from './CustomTableRowProps.types';
import { IdentifiableObject } from '../CustomTable/CustomTable.types';
import { MouseEvent } from 'react';

export function CustomTableRow<T extends IdentifiableObject>(props: CustomTableRowProps<T>) {
  const { row, columnConfig, rowIdx, isSelected, handleClick } = props;
  const labelId = `enhanced-table-checkbox-${rowIdx}`;

  return (
    <TableRow
      hover
      onClick={(event: MouseEvent<unknown>) => {
        return handleClick(event, row);
      }}
      role='checkbox'
      aria-checked={isSelected}
      tabIndex={-1}
      key={row.id}
      selected={isSelected}
    >
      <TableCell padding='checkbox'>
        <Checkbox
          color='primary'
          checked={isSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>

      {columnConfig.map((column, index) => {
        return <TableCell key={index}>{String(row[column.id])}</TableCell>;
      })}
    </TableRow>
  );
}
