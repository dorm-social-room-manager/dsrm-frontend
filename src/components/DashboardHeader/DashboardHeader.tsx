import { AppBar, AppBarProps, Avatar, Box, Divider, IconButton, List, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { DashboardHeaderProps } from './DashboardHeader.types';
import { DashboardItem } from '../DashboardCard/DashboardCard.types';
import { DrawerItem } from './DrawerItem';
import { DrawerStyled } from './DashboardHeader.styled';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const DrawerHeader = styled('div')(({ theme }) => {
  return {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  };
});

interface MyAppBarProps extends AppBarProps {
  open?: boolean;
}
const MyAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => {
    return prop !== 'open';
  },
})<MyAppBarProps>(({ theme, open }) => {
  return {
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
    ...(open && {
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  };
});

const drawerWidth = 240;
export function DashboardHeader(props: DashboardHeaderProps) {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElement(null);
  };

  const settings = [
    {
      action: () => {
        navigate('/account');
      },
      key: 'account',
      option: t('dashboardHeader.account'),
    },
    {
      action: () => {
        navigate('/dashboard');
      },
      key: 'dashboard',
      option: t('dashboardHeader.dashboard'),
    },
    {
      action: () => {
        navigate('/');
      },
      key: 'logOut',
      option: t('dashboardHeader.logOut'),
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems: DashboardItem[] = [];
  if (props.userRole === 'Admin') {
    drawerItems.push(
      {
        icon: PersonIcon,
        title: t(`dashboardPage.users`),
        url: '/dashboard/user-list',
      },
      {
        icon: InsertPhotoSharpIcon,
        title: t(`dashboardPage.rooms`),
        url: '/dashboard/rooms',
      },
      {
        icon: FeaturedPlayListSharpIcon,
        title: t('dashboardPage.reservations'),
        url: '/dashboard/reservations',
      },
      {
        icon: AddPhotoAlternateSharpIcon,
        title: t('dashboardPage.addRoom'),
        url: '/dashboard/add-room',
      }
    );
  } else {
    drawerItems.push(
      {
        icon: InsertPhotoSharpIcon,
        title: t(`dashboardPage.rooms`),
        url: '/dashboard/rooms',
      },
      {
        icon: FeaturedPlayListSharpIcon,
        title: t('dashboardPage.reservations'),
        url: '/dashboard/reservations',
      },
      {
        icon: NoteAddIcon,
        title: t('dashboardPage.addReservation'),
        url: '/dashboard/add-reservation',
      }
    );
  }
  return (
    <Box>
      <MyAppBar open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            onClick={handleDrawerOpen}
            size='large'
            edge='start'
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            marginLeft={2}
            variant='h6'
            component='div'
            width='100%'
          >
            {props.logo}
          </Typography>
          <Box>
            <Tooltip title='Open settings'>
              <IconButton
                onClick={handleOpenMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt={props.userName ?? 'User'}
                  src={props.userAvatar ?? ''}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElement}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              keepMounted
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              open={Boolean(anchorElement)}
              onClose={handleCloseMenu}
            >
              {settings.map((setting) => {
                return (
                  <MenuItem
                    key={setting.key}
                    onClick={handleCloseMenu}
                  >
                    <Typography
                      textAlign='center'
                      onClick={setting.action}
                    >
                      {setting.option}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </MyAppBar>
      <DrawerStyled
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item, index) => {
            return (
              <DrawerItem
                key={index}
                {...item}
              />
            );
          })}
        </List>
      </DrawerStyled>
    </Box>
  );
}
