import { QueryParams } from '../types/QueryParams.types';

export const addQueryParams = (url: string, params: QueryParams) => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlParams.append(key, value.toString());
    }
  });
  return `${url}?${urlParams.toString()}`;
};
