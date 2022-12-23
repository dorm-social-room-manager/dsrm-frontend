import '../../i18n/i18n.ts';
import { Checkbox, FormControlLabel, Grid, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function LoginOptions() {
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction={{
        desktop: 'row',
        mobile: 'column',
        tablet: 'row',
      }}
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >
      <Grid
        item
        mobile={7}
        base={8}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={t('loginForm.rememberMe')}
        />
      </Grid>
      <Grid
        item
        mobile={5}
        base={8}
      >
        <Link href='#'>{t('loginForm.forgotPassword')}</Link>
      </Grid>
    </Grid>
  );
}
