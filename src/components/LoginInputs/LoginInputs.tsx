import { Grid, TextField } from '@mui/material';
import { Field } from 'formik';
import { PasswordInput } from '../PasswordInput/PasswordInput';

export function LoginInputs() {
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
          label='e-mail'
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
