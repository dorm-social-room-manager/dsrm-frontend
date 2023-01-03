import * as React from 'react';
import { Box, Grid, Link, Paper, SvgIcon, Typography } from '@mui/material';
import { DashboardItem } from './DashboardCard.types';
import { Link as RouterLink } from 'react-router-dom';

export function DashboardCard(props: DashboardItem) {
  return (
    <Grid item>
      <Link
        component={RouterLink}
        to={props.url}
        underline='none'
        color='inherit'
      >
        <Paper elevation={1}>
          <Box
            display={'flex'}
            width={200}
            height={200}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <SvgIcon
              sx={{
                fontSize: 48,
              }}
              component={props.icon}
            />
            <Typography
              fontFamily={'Roboto'}
              fontSize={24}
            >
              {props.title}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}
export type DashboardCard = React.ReactElement<DashboardItem>;
