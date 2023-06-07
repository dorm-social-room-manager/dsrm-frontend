import { Alert, styled } from '@mui/material';
import { Field } from 'formik';

export const InputStyled = styled(Field)(() => {
  return {
    width: '100%',
  };
});

export const AlertStyled = styled(Alert)(() => {
  return { width: '100%' };
});
