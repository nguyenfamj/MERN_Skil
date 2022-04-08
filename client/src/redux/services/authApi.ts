// Import from RTK
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import interfaces
import {
  authenticateResponse,
  loginAuthResponse,
  registerAuthResponse,
} from '../../interfaces/apiResponse';
import { loginAuth, registerAuth } from '../../interfaces/formInputs';

// Import RootState
import { RootState } from '../store';

// Import API URL
import { apiURL as baseUrl, LOCAL_STORAGE_TOKEN_NAME } from '../constants/apiConstants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token =
        (getState() as RootState).auth.accessToken || localStorage[LOCAL_STORAGE_TOKEN_NAME];
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<loginAuthResponse, loginAuth>({
      query: (loginInput) => ({ url: 'auth/login', method: 'POST', body: loginInput }),
    }),
    register: builder.mutation<registerAuthResponse, registerAuth>({
      query: (registerInput) => ({ url: 'auth/register', method: 'POST', body: registerInput }),
    }),
    authenticate: builder.query<authenticateResponse, void>({
      query: () => ({ url: 'auth', method: 'GET' }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useAuthenticateQuery } = authApi;
