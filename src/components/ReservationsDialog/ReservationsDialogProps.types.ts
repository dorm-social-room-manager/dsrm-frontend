import { CalendarEvent } from '../../common/types/CalendarEvent.types';

export interface ReservationsDialogProps {
  open: boolean;
  dateStart: Date;
  dateEnd: Date;
  parentMethod: () => void;
  addEvent: (arg: CalendarEvent) => void;
}
