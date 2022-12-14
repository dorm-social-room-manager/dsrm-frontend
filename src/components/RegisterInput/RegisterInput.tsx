import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field } from 'formik';
import { PasswordInput } from '../PasswordInput/PasswordInput';

export function RegisterInput() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));

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
          label='First Name'
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
          label='Last Name'
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
          label='Phone Number'
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
