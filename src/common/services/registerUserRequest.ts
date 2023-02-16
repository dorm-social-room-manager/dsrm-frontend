import { CreateUserType } from '../../common/types/OperationTypes.types';
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

const createUser = async (values: CreateUserType): Promise<any> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, getRequestObject(values));
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};
