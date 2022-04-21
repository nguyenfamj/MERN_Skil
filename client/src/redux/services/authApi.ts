// Import from RTK
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import interfaces
import {
  authenticateResponse,
  loginAuthResponse,
  registerAuthResponse,
} from '../../interfaces/authApiResponse';
import { loginAuth, registerAuth } from '../../interfaces/formInputs';

// Import RootState
import { RootState } from '../store';

// Import API URL
import { apiURL as baseUrl } from '../constants/apiConstants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
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

export const { useLoginMutation, useRegisterMutation, useLazyAuthenticateQuery } = authApi;
