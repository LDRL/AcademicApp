export const ENV = {
  STAGE: 'development' as 'development' | 'prod',
  API_URL: 'http://10.185.95.66:3000/api',
  API_URL_IOS: 'http://10.185.95.66:3000/api',
  API_URL_ANDROID: 'http://10.185.95.66:3000/api',
};

export type EnvType = typeof ENV;