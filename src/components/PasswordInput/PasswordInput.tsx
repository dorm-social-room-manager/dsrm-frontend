import '../../i18n/i18n.ts';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function PasswordInput() {
  const [showPassword, setshowPassword] = useState(false);
  function handleShowPassword() {
    setshowPassword(!showPassword);
  }
  const { t } = useTranslation();
  const aria = t('LoginForm.show_password');
  return (
    <Field
      as={TextField}
      className='input'
      label={t('LoginForm.password')}
      type={showPassword ? 'text' : 'password'}
      name='password'
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label={aria}
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
