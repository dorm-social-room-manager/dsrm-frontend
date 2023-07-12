import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, styled } from '@mui/material';
import { DateSpanApi, EventClickArg } from '@fullcalendar/core';
import { CalendarEvent } from '../common/types/CalendarEvent.types';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { DashboardHeaderProps } from '../components/DashboardHeader/DashboardHeader.types';
import { Footer } from '../templates/Footer/Footer';
import FullCalendar from '@fullcalendar/react';
import { i18n } from '../i18n/i18n';
import interactionPlugin from '@fullcalendar/interaction';
import { ReservationsDialog } from '../components/ReservationsDialog/ReservationsDialog';
import { ReservationsDialogProps } from '../components/ReservationsDialog/ReservationsDialogProps.types';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const StyledFullCalendar = styled(FullCalendar)`
  .fc .fc-button-primary {
    background-color: #1976d2;
    border-color: #1976d2;
  }

  .fc .fc-button-primary:hover {
    background-color: #09427a;
    border-color: #09427a;
  }

  .fc-theme-standard td,
  .fc-theme-standard td,
  .fc-theme-standard th,
  .fc-theme-standard .fc-scrollgrid {
    border: 1px solid #b8b8b8;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 1em;
  }

  .fc .fc-toolbar-title,
  .fc .fc-col-header-cell-cushion {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

export function ReservationPage() {
  const [openReservationDialog, setOpenReservationDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateSpanApi>();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [modifyDialogOpen, setModifyDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const { t } = useTranslation();

  const dashboardHeaderProps: DashboardHeaderProps = {
    logo: t('reservations.logo'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
    userName: 'John Doe',
  };

  const handleReservationDialogClose = () => {
    setOpenReservationDialog(false);
  };

  const handleDateSelection = (dateInfo: DateSpanApi) => {
    if (isSelectedDateValid(dateInfo.start, dateInfo.end)) {
      setSelectedDate(dateInfo);
      setOpenReservationDialog(true);
    } else {
      setErrorMessage('Reservation cannot exceed the time after midnight');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const isSelectedDateValid = (dateStart: Date, dateEnd: Date): boolean => {
    if (dateStart.getDay() !== dateEnd.getDay()) {
      return false;
    }
    return true;
  };

  const handleAddEvent = (event: CalendarEvent) => {
    setEvents([...events, event]);
  };

  const handleEventClick = (info: EventClickArg) => {
    setSelectedEvent(info.event.id);
    setModifyDialogOpen(true);
  };

  const handleModificationDialogClose = () => {
    setModifyDialogOpen(false);
  };

  const handleEventModification = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter((event) => {
        return event.id !== selectedEvent;
      });
      setEvents(updatedEvents);
    }
    setModifyDialogOpen(false);
    setSelectedEvent(null);
  };

  const reservationsDialogProps: ReservationsDialogProps = {
    addEvent: handleAddEvent,
    dateEnd: selectedDate?.end || new Date(),
    dateStart: selectedDate?.start || new Date(),
    open: openReservationDialog,
    parentMethod: handleReservationDialogClose,
  };

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      direction='row'
      height='100vh'
    >
      <Grid
        item
        mobile={12}
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
        height='65%'
      >
        <ReservationsDialog {...reservationsDialogProps} />
        <StyledFullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView='timeGridWeek'
          selectable={true}
          height='100%'
          allDaySlot={false}
          slotDuration='01:00:00'
          select={handleDateSelection}
          eventClick={handleEventClick}
          headerToolbar={{
            center: 'title',
            left: 'prev',
            right: 'next',
          }}
          events={events}
          locale={i18n.language}
        />
        {errorMessage && (
          <Alert
            severity='error'
            sx={{ marginTop: '10px' }}
          >
            {errorMessage}
          </Alert>
        )}
        <Dialog
          open={modifyDialogOpen}
          onClose={handleModificationDialogClose}
        >
          <DialogTitle>Delete Event</DialogTitle>
          <DialogContent>Are you sure you want to delete the event?</DialogContent>
          <DialogActions>
            <Button
              onClick={handleModificationDialogClose}
              color='primary'
            >
              Cancel
            </Button>
            <Button
              onClick={handleEventModification}
              color='error'
              autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
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
