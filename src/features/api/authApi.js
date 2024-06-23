import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),

  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddUserMutation } = authApi;
