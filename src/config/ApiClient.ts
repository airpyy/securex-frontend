import axios from "axios";
import useAuth from "../auth/store";
import { refreshToken } from "../services/AuthServices";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const accessToken = useAuth.getState().accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

let isRefreshing = false;
let pending: any[] = [];

function queueRequest(cb: any) {
  pending.push(cb);
}

function resolveQueue(newToken: string | null) {
  pending.forEach((cb) => cb(newToken));
  pending = [];
}

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const is401 = error.response?.status === 401;
    const original = error.config;

    if (!is401 || original._retry) {
      return Promise.reject(error);
    }

    original._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        queueRequest((newToken: string | null) => {
          if (!newToken) {
            reject(error);
            return;
          }

          original.headers.Authorization = `Bearer ${newToken}`;
          resolve(apiClient(original));
        });
      });
    }

    isRefreshing = true;

    try {
      const loginResponse = await refreshToken();

      const newToken = loginResponse.accessToken;

      if (!newToken) {
        throw new Error("No Access Token Received");
      }

      useAuth
        .getState()
        .changeLocalLoginData(
          loginResponse.accessToken,
          loginResponse.users,
          true,
          false
        );

      resolveQueue(newToken);

      original.headers.Authorization = `Bearer ${newToken}`;

      return apiClient(original);
    } catch (error) {
      resolveQueue(null);
      useAuth.getState().logout();

      return Promise.reject(error);
    } finally {
      isRefreshing = false;
    }
  }
);

export default apiClient;