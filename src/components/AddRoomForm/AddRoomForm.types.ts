export type AddRoomFormValues = {
  closingTime: string;
  floor: string;
  keyOwner: string;
  maxCapacity: string;
  openingTime: string;
  roomNumber: string;
  roomType?: string;
};

export type AddRoomFormErrors = Partial<Record<keyof AddRoomFormValues, string>>;
