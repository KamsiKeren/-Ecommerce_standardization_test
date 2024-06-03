import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleProductApi = createApi({
  reducerPath: "singleProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com/products/` }),
  endpoints: (builder) => ({
    getSingleProduct: builder.query({
      query: () => `singleProduct`,
    }),
  }),
});

export const { useGetSingleProductQuery } = singleProductApi;
