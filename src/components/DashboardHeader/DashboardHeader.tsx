import { AppBar, AppBarProps, Avatar, Box, Divider, Drawer, IconButton, List, styled, Toolbar, Typography } from '@mui/material';
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { DashboardHeaderProps } from './DashboardHeader.types';
import { DashboardItem } from '../DashboardCard/DashboardCard.types';
import { DrawerItem } from './DrawerItem';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonIcon from '@mui/icons-material/Person';
import { t } from 'i18next';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);
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
          <IconButton>
            <Avatar
              alt={props.userName === undefined ? 'User' : props.userName}
              src={props.userAvatar === undefined ? '' : props.userAvatar}
            />
          </IconButton>
        </Toolbar>
      </MyAppBar>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
          flexShrink: 0,
          width: drawerWidth,
        }}
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
      </Drawer>
    </Box>
  );
}
