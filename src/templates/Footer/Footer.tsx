import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { IconsGroup } from '../../components/IconsGroup/IconsGroup';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    base: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      base: 0,
      desktop: 1024,
      mobile: 360,
      tablet: 768,
    },
  },
});
export function Footer() {
  const tablet: boolean = useMediaQuery(defaultTheme.breakpoints.up('mobile'));
  const mobileGap = 4;
  const tabletGap = 0;
  return (
    <ThemeProvider theme={defaultTheme}>
      <footer>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          height={158}
          bgcolor={defaultTheme.palette.primary.main}
          color={defaultTheme.palette.common.white}
          direction={tablet ? 'row' : 'column'}
          gap={tablet ? tabletGap : mobileGap}
          marginTop={0}
        >
          <div>
            <Typography
              sx={{
                display: 'inline',
                fontWeight: (theme) => {
                  return theme.typography.fontWeightMedium;
                },
              }}
            >
              Copyright © 2022
            </Typography>
            <Typography
              sx={{
                display: 'inline',
                fontWeight: (theme) => {
                  return theme.typography.fontWeightBold;
                },
              }}
            >
              {' DSRM Team. '}
            </Typography>
            <Typography
              sx={{
                display: 'inline',
                fontWeight: (theme) => {
                  return theme.typography.fontWeightBold;
                },
                textDecoration: 'underline',
              }}
            >
              <Link
                href='https://github.com/dorm-social-room-manager/dsrm-frontend/blob/master/LICENSE.MD'
                target='_blank'
                color='inherit'
              >
                Policy terms
              </Link>
            </Typography>
          </div>
          <IconsGroup></IconsGroup>
        </Grid>
      </footer>
    </ThemeProvider>
  );
}
