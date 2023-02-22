export type RegisterFormErrors = {
  email?: string;
  password?: string;
  lastName?: string;
  firstNme?: string;
  phone?: string;
};

export interface RoomType {
  id: number;
  name: string;
}

export interface RoomTypeProps {
  roomTypes: RoomType[];
}
