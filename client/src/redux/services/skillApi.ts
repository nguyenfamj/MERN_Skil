// Import from RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import interfaces

// Import RootState
import { RootState } from '../store';

// Import interfaces
import { getSkillsResponse } from '../../interfaces/skillApiResponse';

// import API URL
import { apiURL as baseUrl } from '../constants/apiConstants';

export const skillApi = createApi({
  reducerPath: 'skillApi',
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
    // createSkill: builder.mutation({}),
    getSkills: builder.query<getSkillsResponse, void>({
      query: () => ({ url: 'skills', method: 'GET' }),
    }),
    // updateSkill: builder.mutation({}),
    // deleteSkill: builder.mutation({}),
  }),
});

export const { useGetSkillsQuery } = skillApi;
