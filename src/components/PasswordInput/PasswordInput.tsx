import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    return setShowPassword((currentState) => {
      return !currentState;
    });
  };
  const { t } = useTranslation();
  const aria = t('loginForm.showPassword');
  return (
    <Field
      as={TextField}
      sx={{
        '& input::-ms-reveal, & input::-ms-clear': {
          display: 'none',
        },
        width: '100%',
      }}
      label={t('loginForm.password')}
      type={showPassword ? 'text' : 'password'}
      name='password'
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label={aria}
              onClick={toggleShowPassword}
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
