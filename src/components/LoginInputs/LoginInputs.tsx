import '../../i18n/i18n.ts';
import './LoginInput.scss';
import { Grid, TextField } from '@mui/material';
import { Field } from 'formik';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { useTranslation } from 'react-i18next';

export function LoginInputs() {
  const { t } = useTranslation();
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      <Grid
        item
        base={12}
      >
        <Field
          as={TextField}
          className='input'
          label={t('LoginForm.email')}
          type='email'
          name='email'
          required
        />
      </Grid>
      <Grid
        item
        base={12}
      >
        <PasswordInput />
      </Grid>
    </Grid>
  );
}
