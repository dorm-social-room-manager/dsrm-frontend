import { RegisterFormData } from '../types/RegisterFormData.types';

export const registerUserRequest = async (values: RegisterFormData) => {
  //this will be later replaced with any type later on
  const response = await fetch('https://your-api-endpoint.com/users', {
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  return response.json();
};
