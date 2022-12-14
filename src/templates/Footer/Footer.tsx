import { Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { IconsGroup } from '../../components/IconsGroup/IconsGroup';

export function Footer() {
  const customTheme = useTheme();
  const tablet: boolean = useMediaQuery(customTheme.breakpoints.up('mobile'));
  const mobileGap = 4;
  const tabletGap = 0;
  return (
    <footer>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        height={158}
        bgcolor={customTheme.palette.primary.main}
        color={customTheme.palette.common.white}
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
  );
}
