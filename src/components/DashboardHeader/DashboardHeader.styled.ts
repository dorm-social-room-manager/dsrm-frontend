import { Drawer } from '@mui/material';
import { styled } from '@mui/material';

export const DrawerStyled = styled(Drawer)(() => {
  return {
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 240,
    },
    flexShrink: 0,
    width: 240,
  };
});
