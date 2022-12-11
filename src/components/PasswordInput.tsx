import { ChangeEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface passHandlers {
  handlePass: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function PasswordInput({ handlePass }: passHandlers) {
  const [showPassword, setshowPassword] = useState(false);
  function handleShowPassword() {
    setshowPassword(!showPassword);
  }

  return (
    <TextField
      className='input'
      label='Password'
      type={showPassword ? 'password' : 'text'}
      name='password'
      onChange={(e) => {
        handlePass(e);
      }}
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleShowPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
