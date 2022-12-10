import '@fontsource/roboto';
import './Footer.scss';
import { Grid, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export function Footer() {
  const defaultTheme = createTheme();
  return (
    <footer>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        bgcolor='#1976D2'
        spacing={0}
        padding={0}
        height={158}
      >
        <Grid
          style={{ textAlign: 'center' }}
          color={defaultTheme.palette.common.white}
        >
          <div className='spacer'>
            <Typography
              sx={{
                fontWeight: (theme) => {
                  return theme.typography.fontWeightMedium;
                },
              }}
            >
              Copyright © 2022
            </Typography>
            <Typography
              sx={{
                fontWeight: (theme) => {
                  return theme.typography.fontWeightBold;
                },
              }}
            >
              DSRM Team.
            </Typography>
            <Typography
              sx={{
                fontWeight: (theme) => {
                  return theme.typography.fontWeightBold;
                },
                textDecoration: 'underline',
              }}
            >
              Policy terms
            </Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
