// Import from RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import interfaces

// Import RootState
import { RootState } from '../store';

// Import interfaces
import {
  getSkillsResponse,
  createSkillResponse,
  updateSkillResponse,
  deleteSkillResponse,
} from '../../interfaces/skillApiResponse';
import { skillInput, updateSkillQuery, deleteSkillQuery } from '../../interfaces/formInputs';

// import API URL
import { apiURL as baseUrl } from '../constants/apiConstants';

export const skillApi = createApi({
  reducerPath: 'skillApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Skill'],
  endpoints: (builder) => ({
    createSkill: builder.mutation<createSkillResponse, skillInput>({
      query: (skillInput) => ({ url: 'skills', method: 'POST', body: skillInput }),
      invalidatesTags: ['Skill'],
    }),
    getSkills: builder.query<getSkillsResponse, void>({
      query: () => ({ url: 'skills', method: 'GET' }),
      providesTags: ['Skill'],
    }),
    updateSkill: builder.mutation<updateSkillResponse, updateSkillQuery>({
      query: ({ _id, updatedSkill }) => ({
        url: `skills/${_id}`,
        method: 'PUT',
        body: updatedSkill,
      }),
      invalidatesTags: ['Skill'],
    }),
    deleteSkill: builder.mutation<deleteSkillResponse, deleteSkillQuery>({
      query: ({ _id }) => ({ url: `skills/${_id}`, method: 'DELETE' }),
      invalidatesTags: ['Skill'],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
