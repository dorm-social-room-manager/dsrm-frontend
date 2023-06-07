import {
  CreateUserType,
  JwtResponse,
  LoginDetailsRequestDTO,
  ReadUsersQueryType,
  ReadUsersResponseType,
  UserDTO,
} from '../../types/OperationTypes.types';
import jwt, { JwtPayload } from 'jwt-decode';
import { addQueryParams } from '../../utils/addQueryParams';
import Cookies from 'universal-cookie';
import { FetchError } from '../../../errors/FetchError';
import { useMutation } from '@tanstack/react-query';

const getRequestObject = (values: Record<PropertyKey, unknown>, method: RequestInit['method'] = 'POST') => {
  return {
    body: JSON.stringify(values),
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    method: method,
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

const loginUser = async (values: LoginDetailsRequestDTO): Promise<JwtResponse> => {
  return await fetch(`${import.meta.env.VITE_API_URL}/authenticate`, getRequestObject(values, 'PUT'))
    .then((response) => {
      return response.json();
    })
    .then((data: JwtResponse) => {
      const cookies = new Cookies();
      if (data.accessToken === undefined) {
        throw new FetchError("Couldn't login user");
      }
      const decoded = jwt<JwtPayload>(data.accessToken);
      if (decoded.exp === undefined) {
        throw new FetchError("Couldn't login user");
      }
      cookies.set('jwt_authorization', data, {
        expires: new Date(decoded.exp * 1000),
      });
      return data;
    })
    .catch(() => {
      throw new FetchError("Couldn't login user");
    });
};

export const useLoginUserMutation = () => {
  return useMutation(loginUser);
};

const readUsers = async (params: ReadUsersQueryType): Promise<ReadUsersResponseType> => {
  let fetchQuery = `${import.meta.env.VITE_API_URL}/admin/users`;
  if (params?.query) {
    fetchQuery = addQueryParams(fetchQuery, params.query);
  }

  return await fetch(fetchQuery)
    .then((response) => {
      return response.json();
    })
    .then((data: ReadUsersResponseType) => {
      return data;
    })
    .catch(() => {
      throw new FetchError("Couldn't read users");
    });
};

export const useCreateUserMutation = () => {
  return useMutation(createUser);
};

export const useReadUsersMutation = (handleInputData: (data: UserDTO[], totalElements?: number) => void) => {
  return useMutation(readUsers, {
    onSuccess: (data) => {
      if (data.content !== undefined) {
        const rows2: UserDTO[] = data.content;
        handleInputData(rows2, data.totalElements);
      }
    },
  });
};
