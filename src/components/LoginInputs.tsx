import { Grid, TextField } from '@mui/material';
import { PasswordInput } from './PasswordInput';

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
        <TextField
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
