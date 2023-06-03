import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { CalendarEvent } from '../../common/types/CalendarEvent.types';
import { isRecordWithAllFields } from '../../common/utils/typeguards/isRecordWithAllFields';
import { ReservationError } from '../../common/types/ReservationError.types';
import { ReservationsDialogProps } from './ReservationsDialogProps.types';
import { useTranslation } from 'react-i18next';

interface ReservationValues {
  date: string;
  endTime: string;
  roomNumber: number;
  startTime: string;
}

export function ReservationsDialog(props: ReservationsDialogProps) {
  const TITLE_PREFIX = 'ROOM:';

  const { t } = useTranslation();

  const formatDateString = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${year}-${month}-${day}`;
  };

  const validate = (values: ReservationValues) => {
    const errors: ReservationError = {};
    if (props.dateEnd < props.dateStart) {
      errors.dateStartBeforeDateEnd = t('reservations.dateStartBeforeDateEnd');
    }

    if (props.dateStart < new Date()) {
      errors.dateStartBeforeCurrentDate = t('reservations.dateStartBeforeCurrentDate');
    }

    if (values.roomNumber < 1) {
      errors.invalidRoomNumber = t('reservations.invalidRoomNumber');
    }

    return errors;
  };

  const handleSubmit = (values: ReservationValues) => {
    if (!isRecordWithAllFields<ReservationValues>(values, ['date', 'endTime', 'roomNumber', 'startTime'])) {
      return;
    }

    const eventStart = new Date(`${values.date}T${values.startTime}`);
    const eventEnd = new Date(`${values.date}T${values.endTime}`);

    const newEvent: CalendarEvent = {
      end: eventEnd,
      id: `event_${values.startTime}+${values.roomNumber}+${values.endTime}`,
      start: eventStart,
      title: `${TITLE_PREFIX} ${values.roomNumber.toString()}`,
    };

    props.addEvent(newEvent);

    props.parentMethod();

    console.log(values);
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>Make reservation</DialogTitle>
      <Formik<ReservationValues>
        enableReinitialize
        validateOnMount={true}
        validateOnChange={true}
        validateOnBlur={true}
        initialValues={{
          date: formatDateString(props.dateStart),
          endTime: props.dateEnd.toLocaleTimeString([], { hour: '2-digit', hour12: false, minute: '2-digit' }),
          roomNumber: 1,
          startTime: props.dateStart.toLocaleTimeString([], { hour: '2-digit', hour12: false, minute: '2-digit' }),
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form>
              <DialogContent sx={{ '& > :not(style)': { marginBottom: '8px' } }}>
                <InputLabel>{t('reservations.dialogInputDate')}</InputLabel>
                <Field
                  as={TextField}
                  name='date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
                <InputLabel>{t('reservations.dialogInputStartTime')}</InputLabel>
                <Field
                  as={TextField}
                  name='startTime'
                  type='time'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
                <InputLabel>{t('reservations.dialogInputEndTime')}</InputLabel>
                <Field
                  as={TextField}
                  name='endTime'
                  type='time'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
                <InputLabel>{t('reservations.dialogInputRoomNumber')}</InputLabel>
                <Field
                  as={TextField}
                  name='roomNumber'
                  type='number'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant='contained'
                  onClick={props.parentMethod}
                  color='error'
                  fullWidth={true}
                >
                  {t('reservations.dialogButtonClose')}
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  color='primary'
                  fullWidth={true}
                  disabled={!isValid}
                >
                  {t('reservations.dialogButtonReserve')}
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
}
