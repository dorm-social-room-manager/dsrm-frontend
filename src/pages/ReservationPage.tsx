import { Box, Grid, Typography } from '@mui/material';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Footer } from '../templates/Footer/Footer';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import { ReservationsDialog } from '../components/ReservationsDialog/ReservationsDialog';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ReservationsDialogProps } from '../components/ReservationsDialog/ReservationsDialogProps.types';

export function ReservationPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('reservationsPage.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
  };

  const reservationsDialogProps: ReservationsDialogProps = {
    isOpen: openDialog,
  }

  const handleDateClick = () => {
    setOpenDialog(true);
  };

  // const handleDialogClose = () => {
  //   setOpenDialog
  // }

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
        marginLeft={36}
        marginRight={36}
        marginTop={10}
        marginBottom={10}
        width='60%'
        height='100%' //calc 100% - dashboardHeader height
      >
        <ReservationsDialog {...reservationsDialogProps} />
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          selectable={true}
          dateClick={handleDateClick}
          height='100%'
        />
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
