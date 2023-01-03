import { DashboardBodyProps } from './DashboardBody.types';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { Grid } from '@mui/material';

export function DashboardBody({ items }: DashboardBodyProps) {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      spacing={6}
    >
      {items.map((item, idx) => {
        return (
          <Grid
            item
            key={idx}
          >
            <DashboardCard {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
