import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

export function DashboardHeader() {
  const { t } = useTranslation();
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            color='inherit'
            size='large'
            edge='start'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            marginLeft={2}
            variant='h6'
            component='div'
            width='100%'
          >
            {t('dashboard.logo')}
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt='User' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
