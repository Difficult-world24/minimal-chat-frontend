import { User } from "../../app/slices/AuthUser/type";
import { ApiResponseDto } from "../type";

export type searchResponse = ApiResponseDto<User[]>;
export type searchRequestDTO = {
  username?: string;
  email?: string;
};

export type addFriendDTO = {
  friendId: number;
};
