import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import { DashboardBody } from '../components/DashboardBody/DashnoardBody';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { DashboardItem } from '../components/DashboardCard/DashboardCard.types';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import { Footer } from '../templates/Footer/Footer';
import { Grid } from '@mui/material';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';

export function DashboardPage() {
  const { t } = useTranslation();
  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('dashboard.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
  };

  const ADMIN_ITEMS: DashboardItem[] = [
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
    },
  ];
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
        item
      >
        <DashboardHeader {...dashboardHeaderProps} />
      </Grid>
      <Grid
        item
        mobile={12}
        margin={19}
      >
        <DashboardBody items={ADMIN_ITEMS} />
      </Grid>
      <Grid
        item
        mobile={12}
        alignSelf={'flex-end'}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
