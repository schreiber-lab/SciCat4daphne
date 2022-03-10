import { store } from "../redux";

export const requestInterceptor = (config) => {
  const { authToken } = store.getState().auth;

  config.params = {
    ...(config.params || {}),
    access_token: config.params?.access_token || authToken,
  };

  return config;
};
