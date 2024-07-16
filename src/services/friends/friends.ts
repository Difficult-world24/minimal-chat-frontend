import { createApi } from "@reduxjs/toolkit/query/react";
import { addFriendDTO, searchRequestDTO, searchResponse } from "./type";
import { RTKCustomFetchBase } from "../RTKfetchBase";

export const friendsService = createApi({
  reducerPath: "friendsAPI",
  baseQuery: RTKCustomFetchBase,
  tagTypes: ["Friends"],
  endpoints: (builder) => ({
    searchFriends: builder.mutation<searchResponse, searchRequestDTO>({
      query: ({ email, username }: searchRequestDTO) => ({
        method: "GET",
        url: "/friends/search",
        params: {
          username,
          email,
        },
      }),
    }),
    addFriend: builder.mutation<searchResponse, addFriendDTO>({
      query: ({ friendId }: addFriendDTO) => ({
        method: "POST",
        url: "/friends/add",
        body: {
          friendId,
        },
      }),
    }),
  }),
});
export const { useSearchFriendsMutation, useAddFriendMutation } =
  friendsService;
