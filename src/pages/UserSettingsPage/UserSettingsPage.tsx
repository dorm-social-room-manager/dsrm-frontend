import { DashboardHeader } from '../../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { UserAccountBody } from '../../templates/UserAccountBody/UserAccountBody';
import { useTranslation } from 'react-i18next';

export function UserSettingsPage() {
  const { t } = useTranslation();
  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('dashboard.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
    userRole: 'Admin',
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
        item
      >
        <DashboardHeader {...dashboardHeaderProps} />
      </Grid>
      <Grid
        item
        container
        mobile={12}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <UserAccountBody />
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
