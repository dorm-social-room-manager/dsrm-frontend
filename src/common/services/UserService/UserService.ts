import { LoginDetails, LoginDetailsRequestDTO } from '../../types/OperationTypes.types';
import { FetchError } from '../../../errors/FetchError';
import { useMutation } from '@tanstack/react-query';

const getRequestObject = (values: LoginDetails | LoginDetailsRequestDTO, requestMethod: string) => {
  return {
    body: JSON.stringify(values),
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    method: requestMethod,
  };
};

const createUser = async (values: LoginDetails): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, getRequestObject(values, 'POST')).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new FetchError("Couldn't create user");
    }
  });
};

const authenticateUser = async (values: LoginDetails): Promise<Response> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/authenticate`, getRequestObject(values, 'PUT')).then((response) => {
    if (response.ok) {
      return response;
    } else {
      throw new FetchError("Couldn't authenticate user");
    }
  });
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};

export const useAuthenticateUserMutation = () => {
  return useMutation(authenticateUser);
};
