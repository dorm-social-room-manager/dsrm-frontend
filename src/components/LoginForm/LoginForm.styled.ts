import { Button, styled } from '@mui/material';
import { Field } from 'formik';

export const LoginFormInputStyled = styled(Field)(() => {
  return { width: '100%' };
});

export const LoginFormButtonStyled = styled(Button)(() => {
  return {
    padding: 1,
    width: 1,
  };
});
