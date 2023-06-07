import { styled, Typography } from '@mui/material';

export const StyledTypographyMedium = styled(Typography)(({ theme }) => {
  return {
    display: 'inline',
    fontWeight: theme.typography.fontWeightMedium,
  };
});

export const StyledTypographyBold = styled(Typography)(({ theme }) => {
  return {
    display: 'inline',
    fontWeight: theme.typography.fontWeightBold,
  };
});
