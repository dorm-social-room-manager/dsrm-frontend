import { Divider, Grid, styled, useMediaQuery } from '@mui/material';

export const HeaderDividerStyled = styled(Divider)(({ theme }) => {
  return { backgroundColor: theme.palette.action.disabledBackground, marginBottom: 1, marginTop: 1, width: '100%' };
});

export const HeaderContainerStyled = styled('div')(() => {
  return { alignItems: 'center', display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', margin: '0px', padding: '0px' };
});

export const HeaderLinkContainerStyled = styled(Grid)(({ theme }) => {
  const tabletOrHigher = useMediaQuery(theme.breakpoints.up('tablet'));
  return {
    alignItems: 'center',
    display: 'flex',
    gap: theme.spacing(2),
    marginRight: tabletOrHigher ? 'auto' : 0,
  };
});
