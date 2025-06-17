import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<User[], number>({
      query: (limit) => `?limit=${limit.toString()}`,
      providesTags: (_result, _error, id) => [{ type: "Users", id }],
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
