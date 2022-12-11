import { Grid, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { PasswordInput } from './PasswordInput';

interface loginInputHandlers {
  handleEmail: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePass: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function LoginInputs({ handleEmail, handlePass }: loginInputHandlers) {
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
          onChange={(e) => {
            handleEmail(e);
          }}
          required
        />
      </Grid>
      <Grid
        item
        base={12}
      >
        <PasswordInput handlePass={handlePass} />
      </Grid>
    </Grid>
  );
}
