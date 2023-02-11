import { RegisterFormType } from '../../components/RegisterForm/RegisterForm.types';
import { useMutation } from '@tanstack/react-query';

const transformFormData = (formData: RegisterFormType) => {
  return {
    email: formData.email,
    name: formData.firstName,
    password: formData.password,
    roles: null,
    surname: formData.lastName,
  };
};

const getRequestObject = (values: RegisterFormType) => {
  return {
    body: JSON.stringify(transformFormData(values)),
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
};

const createUser = (values: RegisterFormType) => {
  return fetch('http://localhost:8080/users', getRequestObject(values));
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};
