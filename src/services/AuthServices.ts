import type SignupData from "../models/SignupData";
import ApiClient from "../config/ApiClient";
import type LoginData from "../models/LoginData";
import type LoginResponseData from "../models/LoginResponseData";

// Register user
export const registerUser = async (signupData: SignupData) => {
  const response = await ApiClient.post("auth/register", signupData);
  return response.data;
};

// Login user
export const loginUser = async (loginData: LoginData) => {
  const response = await ApiClient.post<LoginResponseData>(
    "auth/login",
    loginData
  );

  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await ApiClient.post("auth/logout");
  return response.data;
};

// Refresh access token
export const refreshToken = async () => {
  const response = await ApiClient.post<LoginResponseData>(
    "auth/refresh"
  );

  return response.data;
};

// Google OAuth login
export const loginWithGoogle = () => {
  window.location.href =
    `${import.meta.env.VITE_API_URL}/oauth2/authorization/google`;
};

// GitHub OAuth login
export const loginWithGithub = () => {
  window.location.href =
    `${import.meta.env.VITE_API_URL}/oauth2/authorization/github`;
};