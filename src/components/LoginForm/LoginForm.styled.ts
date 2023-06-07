import { Button, styled } from '@mui/material';
import { Field } from 'formik';

export const InputStyled = styled(Field)(() => {
  return { width: '100%' };
});

export const ButtonStyled = styled(Button)(() => {
  return {
    padding: 1,
    width: 1,
  };
});
