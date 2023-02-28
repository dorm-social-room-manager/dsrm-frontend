import { components, operations } from '../../generated/types';

export type LoginDetails = operations['addUser']['requestBody']['content']['application/json'];
export type UserTypeDetails = components['schemas']['User']; //used for error handling
export type LoginDetailsRequestDTO = operations['authenticateUser']['requestBody']['content']['application/json'];
