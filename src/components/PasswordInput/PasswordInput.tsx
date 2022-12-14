import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field } from 'formik';
import { useState } from 'react';

export function PasswordInput() {
  const [showPassword, setshowPassword] = useState(false);
  function handleShowPassword() {
    setshowPassword(!showPassword);
  }

  return (
    <Field
      as={TextField}
      className='input'
      label='Password'
      type={showPassword ? 'text' : 'password'}
      name='password'
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