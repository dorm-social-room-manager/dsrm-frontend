export interface Data {
  id: number;
}
export interface RoomData extends Data {
  number: number;
  floor: number;
  type: string;
  keyOwner: string;
  openingHours: string;
  capacity: number;
}

export interface UserData extends Data {
  name: string;
  surname: string;
  email: string;
  room: number;
  userType: string;
}

export interface HeadCell {
  disablePadding: boolean;
  label: string;
}

export interface UserHeadCell extends HeadCell {
  disablePadding: boolean;
  id: keyof UserData;
  label: string;
}

export interface RoomHeadCell extends HeadCell {
  disablePadding: boolean;
  id: keyof RoomData;
  label: string;
}
