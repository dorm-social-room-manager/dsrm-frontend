import '../../i18n';
import { Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { IconsGroup } from '../../components/IconsGroup/IconsGroup';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const customTheme = useTheme();
  const tablet: boolean = useMediaQuery(customTheme.breakpoints.up('mobile'));
  const mobileGap = 4;
  const tabletGap = 0;
  const { t } = useTranslation();

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
            {t('copyright')}
          </Typography>
          <Typography
            sx={{
              display: 'inline',
              fontWeight: (theme) => {
                return theme.typography.fontWeightBold;
              },
            }}
          >
            {` ${t('authors')} `}
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
              {t('policy')}
            </Link>
          </Typography>
        </div>
        <IconsGroup></IconsGroup>
      </Grid>
    </footer>
  );
}
