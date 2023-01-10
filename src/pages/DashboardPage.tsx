import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import { DashboardBody } from '../components/DashboardBody/DashnoardBody';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { DashboardItem } from '../components/DashboardCard/DashboardCard.types';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import { Grid } from '@mui/material';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import PersonIcon from '@mui/icons-material/Person';

const ADMIN_ITEMS: DashboardItem[] = [
  {
    icon: PersonIcon,
    title: 'Users',
    url: '/dashboard/users',
  },
  {
    icon: InsertPhotoSharpIcon,
    title: 'Rooms',
    url: '/dashboard/rooms',
  },
  {
    icon: FeaturedPlayListSharpIcon,
    title: 'Reservations',
    url: '/dashboard/reservations',
  },
  {
    icon: AddPhotoAlternateSharpIcon,
    title: 'Add room',
    url: '/dashboard/add-room',
  },
];
const dashboardHeaderProps: DashboardHeaderProps = {
  userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
  userName: 'John Doe',
};
export function DashboardPage() {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      direction='column'
      height={'100vh'}
    >
      <Grid item>
        <DashboardHeader {...dashboardHeaderProps} />
      </Grid>
      <Grid item>
        <DashboardBody items={ADMIN_ITEMS} />
      </Grid>
    </Grid>
  );
}
