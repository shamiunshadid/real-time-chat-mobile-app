import axios from "axios";
import { useAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";

// http://localhost:3000

const API_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(error.response);
    } else if (error.request) {
      console.error(error.request);
    }
    return Promise.reject(error);
  },
);

export const useApi = () => {
  const { getToken } = useAuth();

  const apiWithAuth = useCallback(
    async <T>(config: Parameters<typeof api.request>[0]) => {
      const token = await getToken();
      return api.request<T>({
        ...config,
        headers: {
          ...config.headers,
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
    },
    [getToken],
  );

  return { api, apiWithAuth };
};
