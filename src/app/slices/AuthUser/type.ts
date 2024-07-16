export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  createdAt: Date;
  alreadyFriends?: boolean;
  Friends: FriendsType[];
}

export interface FriendsType {
  id: number;
  userId: number;
  friendId: number;
  friend: User;
}
