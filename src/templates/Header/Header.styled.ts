import { Divider, Grid, styled, useMediaQuery } from '@mui/material';

export const DividerStyled = styled(Divider)(({ theme }) => {
  return { backgroundColor: theme.palette.action.disabledBackground, marginBottom: 1, marginTop: 1, width: '100%' };
});

export const HeaderContainerStyled = styled('div')(() => {
  return { alignItems: 'center', display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', margin: '0px', padding: '0px' };
});

//TODO
//przypisac defaultowe paddingi w defaultOverrides
export const LinkContainerStyled = styled(Grid)(({ theme }) => {
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  return {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    marginRight: tablet ? 'auto' : undefined,
  };
});
