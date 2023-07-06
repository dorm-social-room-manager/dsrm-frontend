import { Field } from 'formik';
import { styled } from '@mui/material';

export const PasswordInputStyled = styled(Field)(() => {
  return {
    '& input::-ms-reveal, & input::-ms-clear': {
      display: 'none',
    },
    width: '100%',
  };
});
