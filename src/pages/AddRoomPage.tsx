import { AddRoomForm } from '../components/AddRoomForm/AddRoomForm';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { RoomType } from '../components/AddRoomForm/AddRoomForm.types';
import { useTranslation } from 'react-i18next';

const ROOM_TYPES: RoomType[] = [
  {
    id: 1,
    name: 'STUDY',
  },
  {
    id: 2,
    name: 'TV',
  },
  {
    id: 3,
    name: 'BILLARD',
  },
  {
    id: 4,
    name: 'PING PONG',
  },
  {
    id: 5,
    name: 'LAUNDRY',
  },
];

export function AddRoomPage() {
  const { t } = useTranslation();
  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('userList.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
  };
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      direction='row'
      height={'100vh'}
    >
      <Grid
        mobile={12}
        minHeight={56}
        item
      >
        <DashboardHeader {...dashboardHeaderProps} />
      </Grid>
      <Grid
        item
        alignItems='center'
        alignSelf='center'
        alignContent='center'
        justifyContent='center'
        justifyItems='center'
        justifySelf='center'
        mobile={12}
      >
        <AddRoomForm roomTypes={ROOM_TYPES} />
      </Grid>
      <Grid
        item
        mobile={12}
        alignSelf='flex-end'
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
