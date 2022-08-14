import axios from "axios";
import { config } from "./config";

// private $api ppties
let token = "";
let $axios = axios.create({
  baseURL: config.get(
    "baseURL",
    "http://animotionapi.zurifordummies.com/api/v1"
  ),
});

// private $api methods
const parseApiError = (error) => {
  if (error.isAxiosError) {
    const httpError = new Error(
      error?.response?.data?.message || error.message
    );
    httpError.status = error?.response?.status || 0;
    httpError.errors = error?.response?.data?.errors || {};

    return httpError;
  }

  return error;
};

export const $api = {
  setToken(newToken) {
    token = newToken;
  },

  async $post(url, body, config) {
    try {
      const { data } = await $axios.post(url, body, config);

      return data;
    } catch (error) {
      throw parseApiError(error);
    }
  },
};

$axios.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...(config?.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  };
});
