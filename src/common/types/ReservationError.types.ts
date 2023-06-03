export interface ReservationError {
  dateStartBeforeDateEnd?: string;
  dateStartBeforeCurrentDate?: string;
  invalidRoomNumber?: string;
}
