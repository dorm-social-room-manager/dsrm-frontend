import { operations } from '../../generated/types';

export type RegisterFormErrors = {
  email?: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  roomNumber?: string;
};

export type RegisterFormType = operations['addUser']['requestBody']['content']['application/json'];
