export const config = () => ({
  baseURL: process.env.REACT_APP_BASE_URL,
});

config.get = (key, defaultValue) => {
  return config()[key] || defaultValue;
};
