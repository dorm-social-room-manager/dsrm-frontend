import { Checkbox, FormControlLabel, Grid, Link, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function LoginOptions() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction={isTablet ? 'row' : 'column'}
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >
      <Grid>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={t('loginForm.rememberMe')}
        />
      </Grid>
      <Grid item>
        <Link href='#'>{t('loginForm.forgotPassword')}</Link>
      </Grid>
    </Grid>
  );
}
