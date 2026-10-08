import axios, {
  type AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";

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


// =========================================================
// REQUEST INTERCEPTOR
// =========================================================

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    const accessToken =
      useAuth.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization =
        `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);


// =========================================================
// TOKEN REFRESH STATE
// =========================================================

let isRefreshing = false;

type PendingRequest = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

let pendingRequests: PendingRequest[] = [];


// =========================================================
// PROCESS QUEUED REQUESTS
// =========================================================

const processQueue = (
  error: unknown,
  token: string | null
) => {

  pendingRequests.forEach(
    ({ resolve, reject }) => {

      if (error || !token) {
        reject(error);
      } else {
        resolve(token);
      }

    }
  );

  pendingRequests = [];
};


// =========================================================
// RESPONSE INTERCEPTOR
// =========================================================

apiClient.interceptors.response.use(

  // Successful response
  (response) => {
    return response;
  },


  // Error response
  async (error: AxiosError) => {

    const originalRequest =
      error.config as
        | (InternalAxiosRequestConfig & {
            _retry?: boolean;
          })
        | undefined;


    // No config → nothing to retry
    if (!originalRequest) {
      return Promise.reject(error);
    }


    // Only handle 401
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }


    // Prevent infinite refresh loop
    if (originalRequest._retry) {
      return Promise.reject(error);
    }


    // Mark request as retry
    originalRequest._retry = true;


    // =====================================================
    // ANOTHER REFRESH REQUEST IS ALREADY RUNNING
    // =====================================================

    if (isRefreshing) {

      return new Promise<string>(
        (resolve, reject) => {

          pendingRequests.push({
            resolve,
            reject,
          });

        }
      ).then((newToken) => {

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return apiClient(originalRequest);

      });
    }


    // =====================================================
    // START TOKEN REFRESH
    // =====================================================

    isRefreshing = true;


    try {

      /*
       * Refresh token is stored inside the
       * HttpOnly cookie.
       *
       * axios sends it automatically because:
       *
       * withCredentials: true
       */

      const loginResponse =
        await refreshToken();

      const newToken =
        loginResponse.accessToken;


      if (!newToken) {
        throw new Error(
          "No access token received from refresh endpoint"
        );
      }


      // ===================================================
      // UPDATE ZUSTAND AUTH STATE
      // ===================================================

      useAuth
        .getState()
        .changeLocalLoginData(
          newToken,
          loginResponse.users,
          true,
          false
        );


      // ===================================================
      // RESOLVE WAITING REQUESTS
      // ===================================================

      processQueue(
        null,
        newToken
      );


      // ===================================================
      // RETRY ORIGINAL REQUEST
      // ===================================================

      originalRequest.headers.Authorization =
        `Bearer ${newToken}`;

      return apiClient(
        originalRequest
      );

    } catch (refreshError) {

      // ===================================================
      // REFRESH FAILED
      // ===================================================

      processQueue(
        refreshError,
        null
      );


      /*
       * Don't call logout() here.
       *
       * logout() uses apiClient and can trigger
       * another 401/refresh cycle.
       *
       * Clear local authentication state directly.
       */

      localStorage.removeItem(
        "securex"
      );

      useAuth.setState({
        accessToken: null,
        user: null,
        authState: false,
        authLoading: false,
      });


      return Promise.reject(
        refreshError
      );

    } finally {

      isRefreshing = false;

    }
  }
);

export default apiClient;
