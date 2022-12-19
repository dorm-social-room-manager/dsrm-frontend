import { Grid, Link, Typography } from '@mui/material';
import styles from './Header.module.scss';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function Header() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <header>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        spacing={0}
        padding={0}
      >
        <Typography
          sx={{
            borderBottom: 1,
            borderColor: theme.palette.action.disabledBackground,
            fontFamily: 'Roboto Mono',
            fontSize: theme.typography.h2.fontSize,
            fontWeight: (them) => {
              return them.typography.fontWeightMedium;
            },
            letterSpacing: -1.5,
          }}
        >
          {t('header.title')}
        </Typography>
        <div className={styles.graylinks}>
          <Link
            href='https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta
'
            color={theme.palette.primary.dark}
            underline='none'
          >
            {t('header.building_name')}
          </Link>
          <Typography>|</Typography>
          <Link
            href='https://p.lodz.pl/'
            color={theme.palette.primary.dark}
            underline='none'
          >
            {t('header.faculty')}
          </Link>
        </div>
      </Grid>
    </header>
  );
}
