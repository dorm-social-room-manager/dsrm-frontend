import { Alert, styled } from '@mui/material';
import { Field } from 'formik';

export const RegisterFormInputStyled = styled(Field)(() => {
  return {
    width: '100%',
  };
});

export const RegisterFormAlertStyled = styled(Alert)(() => {
  return { width: '100%' };
});
