import { AddRoomForm } from '../components/AddRoomForm/AddRoomForm';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { MockType } from '../components/AddRoomForm/AddRoomForm.types';
import { useTranslation } from 'react-i18next';

const ROOM_TYPES: MockType[] = [
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
const USERS: MockType[] = [
  {
    id: 1,
    name: 'Jan Kowalski',
  },
  {
    id: 2,
    name: 'Jan Kowalski2',
  },
  {
    id: 3,
    name: 'Jan Kowalski3',
  },
  {
    id: 4,
    name: 'Jan Kowalski4',
  },
  {
    id: 5,
    name: 'Jan Kowalski5',
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
        margin={1}
      >
        <AddRoomForm
          roomTypes={ROOM_TYPES}
          users={USERS}
        />
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
