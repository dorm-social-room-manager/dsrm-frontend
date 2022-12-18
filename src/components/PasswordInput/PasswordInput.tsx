import '../../i18n/i18n';
import './PasswordInput.scss';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field } from 'formik';
import styles from './PasswordInput.module.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function PasswordInput() {
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
      className={styles.input}
      label={t('loginForm.password')}
      type={showPassword ? 'text' : 'password'}
        ),
      }}
    />
  );
}
