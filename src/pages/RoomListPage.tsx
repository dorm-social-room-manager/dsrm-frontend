import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../templates/Footer/Footer';
import { RoomList } from '../templates/RoomList/RoomList';
import { useTranslation } from 'react-i18next';

export function RoomListPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const mobileGap = 1;
  const tabletGap = 4;
  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('roomList.logo'),
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
        margin={isTablet ? tabletGap : mobileGap}
        marginTop={1}
        marginBottom={0}
      >
        <RoomList />
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
