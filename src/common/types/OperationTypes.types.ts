import { components, operations } from '../../generated/types';

export type CreateUserType = operations['addUser']['requestBody']['content']['application/json'];
export type ReadUsersResponseType = operations['readUsers']['responses'][200]['content']['*/*'];
export type ReadUsersQueryType = operations['readUsers']['parameters'];
export type UserDTO = components['schemas']['UserDTO'];
export type LoginDetailsRequestDTO = components['schemas']['LoginDetailsRequestDTO'];
export type JwtResponse = components['schemas']['JwtResponse'];
