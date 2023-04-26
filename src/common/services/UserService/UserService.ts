import { CreateUserType, ReadUsersQueryType, ReadUsersResponseType, UserDTO } from '../../types/OperationTypes.types';
import { addQueryParams } from '../../utils/addQueryParams';
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
  let fetchQuery = `${import.meta.env.VITE_API_URL}/admin/users`;
  if (params?.query) {
    fetchQuery = addQueryParams(fetchQuery, params.query);
  }
  return await fetch(fetchQuery)
    .then((response) => {
      if (response !== null && response.ok) {
        return response.json();
      } else {
        throw new FetchError("Couldn't fetch users");
      }
    })
    .then((data: ReadUsersResponseType) => {
      return data;
    });
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};

export const useReadUsersMutation = (handleInputData: (data: UserDTO[], totalElements: number) => void) => {
  return useMutation(readUsers, {
    onSuccess: (data) => {
      if (data.content !== undefined) {
        const rows2: UserDTO[] = data.content;
        handleInputData(rows2, data.totalElements as number);
      }
    },
  });
};
