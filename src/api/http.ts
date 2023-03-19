import { API_TOKEN, BASE_API_URL } from './constants';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const request = async <TBody, TReturn>(
  method: RequestMethod,
  url: string,
  data?: TBody,
  headerName?: string
): Promise<TReturn> => {
  const response = await fetch(url, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  let headerValue;
  if (headerName) {
    headerValue = response.headers.get(headerName ?? '');
  }

  const body = await response.text();
  try {
    if (headerName && headerValue) {
      return {
        [headerName]: headerValue,
        data: JSON.parse(body),
      } as TReturn;
    }
    return JSON.parse(body);
  } catch {
    return body as TReturn;
  }
};

export const getRequest = async <
  TData,
  TQueryParams extends undefined | Record<string, undefined | string | { toString: () => string }>
>(
  url: string,
  queryParams?: TQueryParams,
  headerName?: string
): Promise<TData> => {
  const urlWithQuery = new URL(`${BASE_API_URL}${url}`);
  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      if (!value && value !== null) {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach((item) => urlWithQuery.searchParams.append(key, encodeURIComponent(item.toString())));
        return;
      }

      urlWithQuery.searchParams.set(key, encodeURIComponent(value.toString()));
    });
  }
  return await request('GET', urlWithQuery.toString(), undefined, headerName);
};

export const postRequest = async <TData, TReturn>(url: string, data?: TData): Promise<TReturn> => {
  return await request('POST', `${BASE_API_URL}/${url}`, data);
};

export const putRequest = async <TData>(url: string, data?: TData) => {
  return await request('PUT', `${BASE_API_URL}/${url}`, data);
};

export const patchRequest = async <TData>(url: string, data?: TData) => {
  return await request('PATCH', `${BASE_API_URL}/${url}`, data);
};

export const deleteRequest = async (url: string) => {
  return await request('DELETE', `${BASE_API_URL}/${url}`);
};
