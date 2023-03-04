import { CreateUserType } from '../../types/operationTypes.types';
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

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};
