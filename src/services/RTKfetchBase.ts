import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { GetUserAuthToken } from "../helpers";
import { Config } from "../config";
const baseUrl = Config.baseApiUrl;

export const RTKCustomFetchBase = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    // Access the token from local storage
    const token = GetUserAuthToken();
    if (token) {
      // Set the authorization header with the token
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
