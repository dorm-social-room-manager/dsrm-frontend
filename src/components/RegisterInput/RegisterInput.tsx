import '../../i18n';
import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field } from 'formik';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { useTranslation } from 'react-i18next';

export function RegisterInput() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
  const { t } = useTranslation();
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      spacing={{
        desktop: 4,
        mobile: 2,
        tablet: 4,
      }}
    >
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <Field
          as={TextField}
          className='input'
          label={t('first_name')}
          type='text'
          name='fname'
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <Field
          as={TextField}
          className='input'
          label={t('last_name')}
          type='text'
          name='lname'
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <Field
          as={TextField}
          className='input'
          label={t('phone')}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          type='text'
          name='phone'
          required
        />
      </Grid>
      {!isMobile && (
        <Grid
          item
          tablet={6}
          mobile={0}
        ></Grid>
      )}

      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <Field
          as={TextField}
          className='input'
          label='e-mail'
          type='email'
          name='email'
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <PasswordInput />
      </Grid>
    </Grid>
  );
}
