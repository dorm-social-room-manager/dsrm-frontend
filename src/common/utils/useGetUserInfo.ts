import jwt, { JwtPayload } from 'jwt-decode';
import Cookies from 'universal-cookie';
import { JwtResponse } from '../types/OperationTypes.types';

export function useGetUserInfo() {
  const cookies = new Cookies();
  const token: JwtResponse = cookies.get<JwtResponse>('jwt_authorization');
  if (token.accessToken !== undefined) {
    const decoded = jwt<JwtPayload>(token.accessToken);
    return decoded;
  }
  return null;
}
