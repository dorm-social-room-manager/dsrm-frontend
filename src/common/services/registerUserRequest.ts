import { RegisterFormType } from '../../components/RegisterForm/RegisterForm.types';
import { useMutation } from '@tanstack/react-query';

const getRequestObject = (values: RegisterFormType) => {
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

const createUser = (values: RegisterFormType) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users`, getRequestObject(values));
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};
