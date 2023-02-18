import { CreateUserType } from '../../types/OperationTypes.types';
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

const createUser = async (values: CreateUserType): Promise<CreateUserType> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, getRequestObject(values))
    .then((response) => {
      if (!response.ok) {
        throw new FetchError('Failed to create user.');
      }
      return response.json() as Promise<{ data: CreateUserType }>;
    })
    .then((data) => {
      return data.data;
    });
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};
