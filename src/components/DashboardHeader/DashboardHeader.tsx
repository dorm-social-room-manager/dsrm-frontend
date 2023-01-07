import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { DashboardHeaderProps } from './DashboardHeader.types';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

export function DashboardHeader(props: DashboardHeaderProps) {
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
          <IconButton>
            <Avatar
              alt={props.userName === undefined ? 'User' : props.userName}
              src={props.userAvatar === undefined ? '' : props.userAvatar}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
