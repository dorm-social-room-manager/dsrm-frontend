import { Box, Grid, Link, SvgIcon, Typography } from '@mui/material';
import { DashboardCardStyled } from './DashboardCard.styled';
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
        <DashboardCardStyled elevation={1}>
          <Box
            display={'flex'}
            width={200}
            height={200}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <SvgIcon
              sx={{ fontSize: 64 }}
              color={'inherit'}
              component={props.icon}
            />
            <Typography
              fontFamily={'Roboto'}
              fontSize={24}
            >
              {props.title}
            </Typography>
          </Box>
        </DashboardCardStyled>
      </Link>
    </Grid>
  );
}
