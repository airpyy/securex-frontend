import type User from "./User";

export default interface LoginResponseData  {
  accessToken: string;
  users: User;
};