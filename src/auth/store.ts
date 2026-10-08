import { create } from "zustand";
import type LoginData from "../models/LoginData";
import {
  loginUser,
  logoutUser,
} from "../services/AuthServices";
import type User from "../models/User";

const TOKEN_KEY = "securex";

type AuthState = {
  accessToken: string | null;
  user: User | null;
  authState: boolean;
  authLoading: boolean;

  checkLogin: () => boolean;

  changeLocalLoginData: (
    accessToken: string,
    user: User,
    authState?: boolean,
    authLoading?: boolean
  ) => void;

  login: (loginData: LoginData) => Promise<void>;

  logout: (silent?: boolean) => Promise<void>;
};

const getSavedToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

const useAuth = create<AuthState>((set, get) => ({
  accessToken: getSavedToken(),
  user: null,
  authState: !!getSavedToken(),
  authLoading: false,

  // =========================================================
  // NORMAL LOGIN
  // =========================================================

  login: async (loginData: LoginData) => {
    set({
      authLoading: true,
    });

    try {
      const loginResponseData =
        await loginUser(loginData);

      const accessToken =
        loginResponseData.accessToken;

      const user =
        loginResponseData.users;

      if (!accessToken) {
        throw new Error(
          "Access token was not received"
        );
      }

      // Save token
      localStorage.setItem(
        TOKEN_KEY,
        accessToken
      );

      // Update Zustand
      set({
        accessToken,
        user,
        authState: true,
        authLoading: false,
      });

    } catch (error) {

      set({
        accessToken: null,
        user: null,
        authState: false,
        authLoading: false,
      });

      localStorage.removeItem(TOKEN_KEY);

      throw error;
    }
  },


  // =========================================================
  // OAUTH / LOCAL AUTH STATE
  // =========================================================

  changeLocalLoginData: (
    accessToken,
    user,
    authState = true,
    authLoading = false
  ) => {

    if (accessToken) {
      localStorage.setItem(
        TOKEN_KEY,
        accessToken
      );
    }

    set({
      accessToken,
      user,
      authState,
      authLoading,
    });
  },


  // =========================================================
  // CHECK LOGIN
  // =========================================================

  checkLogin: () => {

    const {
      accessToken,
      authState,
    } = get();

    return Boolean(
      accessToken && authState
    );
  },


  // =========================================================
  // LOGOUT
  // =========================================================

  logout: async (silent = false) => {

    try {

      await logoutUser();

    } catch (error) {

      if (!silent) {
        throw error;
      }

    } finally {

      localStorage.removeItem(
        TOKEN_KEY
      );

      set({
        accessToken: null,
        user: null,
        authState: false,
        authLoading: false,
      });
    }
  },
}));

export default useAuth;