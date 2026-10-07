import type SignupData from "../models/SignupData";
import ApiClient from "../config/ApiClient";
import type LoginData from "../models/LoginData";
import type LoginResponseData from "../models/LoginResponseData";

// register user
export const registerUser = async (signupData: SignupData) => {
  const response = await ApiClient.post("auth/register", signupData);
  return response.data;
};

// login user
export const loginUser = async (loginData: LoginData) => {
  const response = await ApiClient.post<LoginResponseData>(
    "auth/login",
    loginData
  );
  return response.data;
};

// logout user
export const logoutUser = async () => {
  const response = await ApiClient.post("auth/logout");
  return response.data;
};

// refresh token
export const refreshToken = async () => {
  const response = await ApiClient.post<LoginResponseData>("auth/refresh");
  return response.data;
};

// Google login
export const loginWithGoogle = () => {
  window.location.href =
    "http://localhost:8082/oauth2/authorization/google";
};

// GitHub login
export const loginWithGithub = () => {
  window.location.href =
    "http://localhost:8082/oauth2/authorization/github";
};