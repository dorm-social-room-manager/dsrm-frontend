import { CreateUserType, ReadUsersQueryType, ReadUsersResponseType } from '../../types/OperationTypes.types';
import { components } from '../../../generated/types';
import { Data } from '../../../components/UserList/UserList.types';
import { FetchError } from '../../../errors/FetchError';
import { useMutation } from '@tanstack/react-query';

const getRequestObject = (values: CreateUserType) => {
  return {
    body: JSON.stringify(values),
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
};

const createUser = async (values: CreateUserType): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, getRequestObject(values)).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new FetchError("Couldn't create user");
    }
  });
};

const readUsers = async (params: ReadUsersQueryType): Promise<ReadUsersResponseType> => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/users?size=${params?.query?.size as number}&page=${params?.query?.page as number}&sort=${
      params?.query?.sort === undefined ? '' : params?.query?.sort[0]
    },${params?.query?.sort === undefined ? '' : params?.query?.sort[1]}`
  )
    .then((response) => {
      if (response !== null && response.ok) {
        return response.json();
      } else {
        throw new FetchError("Couldn't create user");
      }
    })
    .then((data: ReadUsersResponseType) => {
      return data;
    });
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};

export const useReadUsersMutation = (handleInputData: (data: Data[], totalElements: number) => void) => {
  return useMutation(readUsers, {
    onSuccess: (data) => {
      if (data.content !== undefined) {
        const rows2: Data[] = [];
        data.content.forEach((user: components['schemas']['UserDTO']) => {
          rows2.push({
            email: user.email as string,
            id: parseInt(user.id as string, 10),
            name: user.name as string,
            roles: user.roles === undefined || user.roles[0] === undefined ? '' : (user.roles[0].name as string),
            rolesId: user.roles === undefined || user.roles[0] === undefined ? '0' : (user.roles[0].id as string),
            roomNumber: user.roomNumber as number,
            surname: user.surname as string,
          });
        });
        handleInputData(rows2, data.totalElements as number);
      }
    },
  });
};
