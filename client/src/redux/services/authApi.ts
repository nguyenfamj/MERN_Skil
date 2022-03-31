// Import from RTK
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import interfaces
import { loginAuthResponse } from '../../interfaces/apiResponse';
import { loginAuth } from '../../interfaces/formInputs';

// Import RootState
import { RootState } from '../store';

// Import API URL
import { apiURL as baseUrl } from '../constants/apiConstants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLoginAuth: builder.mutation<loginAuthResponse, loginAuth>({
      query: (loginInput) => ({ url: 'auth/login', method: 'POST', body: loginInput }),
    }),
  }),
});
