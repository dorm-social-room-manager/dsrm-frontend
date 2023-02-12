import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { UserList } from '../components/UserList/UserList';
import { useTranslation } from 'react-i18next';

export function UserListPage() {
  const { t } = useTranslation();
  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('userList.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
  };
  return (
    <Grid
      container
      direction='column'
      height={'100vh'}
      flexWrap='nowrap'
    >
      <Grid
        width={1}
        minHeight={56}
        item
      >
        <DashboardHeader {...dashboardHeaderProps} />
      </Grid>
      <Grid
        item
        mobile={12}
        margin={10}
        marginTop={1}
        marginBottom={0}
      >
        <UserList />
      </Grid>
      <Grid
        item
        width={1}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
