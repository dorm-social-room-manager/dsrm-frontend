import { components, operations } from '../../generated/types';

export type CreateUserType = operations['addUser']['requestBody']['content']['application/json'];
export type ReadUsersResponseType = operations['readUsers']['responses'][200]['content']['*/*'];
export type ReadUsersQueryType = operations['readUsers']['parameters'];
export type UserDTO = components['schemas']['UserDTO'];
export type RoomTypeDTO = components['schemas']['PageRoomTypeDTO']['content'];
export type ReadRoomTypesResponseType = operations['readRoomTypes']['responses'][200]['content']['*/*'];
export type AddRoomQueryType = operations['addRoom']['requestBody']['content']['application/json'];
