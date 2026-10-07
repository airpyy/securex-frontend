import { create } from "zustand";
import type LoginData from "../models/LoginData";
import { loginUser, logoutUser } from "../services/AuthServices";
import type User from "../models/User";

const TOKEN_KEY = "securex";

const savedToken = localStorage.getItem(TOKEN_KEY);

type AuthState = {
  accessToken: string | null;
  user: User | null;
  authState: boolean;
  authLoading: boolean;

  checkLogin: () => boolean;

  changeLocalLoginData: (
    accessToken: string,
    user: User,
    authState: boolean,
    authLoading: boolean,
  ) => void;

  login: (loginData: LoginData) => Promise<void>;
  logout: (silent?: boolean) => Promise<void>;
};

const oAuth = create<AuthState>((set, get) => ({
  accessToken: savedToken,
  user: null,
  authState: !!savedToken,
  authLoading: false,

  login: async (loginData: LoginData) => {
    set({ authLoading: true });

    try {
      const loginResponseData = await loginUser(loginData);

      set({
        accessToken: loginResponseData.accessToken,
        user: loginResponseData.users,
        authState: true,
        authLoading: false,
      });

      localStorage.setItem(TOKEN_KEY, loginResponseData.accessToken);
    } catch (error) {
      set({
        authLoading: false,
      });

      throw error;
    }
  },

  logout: async (silent = false) => {
    try {
      await logoutUser();
    } catch (error) {
      if (!silent) {
        throw error;
      }
    } finally {
      localStorage.removeItem(TOKEN_KEY);

      set({
        accessToken: null,
        user: null,
        authState: false,
        authLoading: false,
      });
    }
  },

  checkLogin: () => {
    const { accessToken, authState } = get();

    return !!accessToken && authState;
  },

  changeLocalLoginData: (accessToken, user, authState, authLoading) => {
    set({
      accessToken,
      user,
      authState,
      authLoading,
    });
  },
}));

export default oAuth;
