import { Paper } from '@mui/material';
import { styled } from '@mui/material';

export const PaperStyled = styled(Paper)(() => {
  return {
    '&:hover': {
      bgcolor: 'secondary.main',
      color: 'secondary.contrastText',
    },
    transitionDuration: '0.3s',
    transitionProperty: 'all',
  };
});
