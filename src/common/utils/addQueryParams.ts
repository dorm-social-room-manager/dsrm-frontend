type QueryParams = Record<string, string | string[] | number | number[] | boolean | boolean[]>;
export const addQueryParams = (url: string, params: QueryParams) => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlParams.append(key, value.toString());
    }
  });
  return `${url}?${urlParams.toString()}`;
};
