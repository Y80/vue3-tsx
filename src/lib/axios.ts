import { message } from 'ant-design-vue';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import router from './router';
import store from './store';

enum HTTPCode {
  RequestError = 400,
  InvalidToken = 401,
  NotFound = 404,
}

const customRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10 * 1000,
  timeoutErrorMessage: '请求超时',
};

const customAxios = axios.create(customRequestConfig);

customAxios.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
  requestConfig.headers.Authorization = store.state.token;
  return requestConfig;
});

customAxios.interceptors.response.use(
  // Promise fulfilled
  (response: AxiosResponse) => Promise.resolve(response.data),
  // Promise rejected
  (error: AxiosError) => {
    let errorMessage;

    if (error.isAxiosError) {
      if (error.response) {
        const { status } = error.response;
        if (status === HTTPCode.RequestError) {
          errorMessage = error.response?.data.message;
        }
        if (status === HTTPCode.InvalidToken) {
          message.warn('登录失效，请重新登录');
          router.push('/login');
        }
      }
    }
    errorMessage ||= error.message;
    errorMessage && message.error(errorMessage);

    return Promise.reject(error);
  }
);

export default customAxios;
