/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export default class ApiService {
  protected static instance: ApiService;
  protected axiosInstance: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  protected constructor() {
    this.setupResponseInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private setupResponseInterceptors() {
    const axiosInstance = this.axiosInstance;
    axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response) {
          const { status } = error.response;

          // 500번대 에러는 ErrorBoundary에서 처리
          if (status >= 500) {
            throw error; // ErrorBoundary에서 잡을 수 있도록 throw
          }

          // 400번대 에러는 toast로 처리
          if (status >= 400 && status < 500) {
            if (status === 404) {
              window.location.replace('/not-found');
            }
            toast.error(
              `${error.response.data.message || 'Something went wrong!'}`
            );
          }
        } else {
          // 네트워크 에러 또는 응답 없는 경우
          toast.error('Network error: Please check your connection.');
        }
        return Promise.reject(error);
      }
    );
  }

  protected async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ) {
    return this.axiosInstance.get<T, R, D>(url, config);
  }

  protected async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    return this.axiosInstance.post<T, R, D>(url, data, config);
  }

  protected async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    return this.axiosInstance.put<T, R, D>(url, data, config);
  }

  protected async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ) {
    return this.axiosInstance.delete<T, R, D>(url, config);
  }
}
