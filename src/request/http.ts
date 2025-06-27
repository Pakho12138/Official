import axios,  { type AxiosRequestConfig, type AxiosResponse } from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || '/api', // 从环境变量获取API基础URL
  timeout: Number(import.meta.env.VITE_APP_TIMEOUT) || 15000, // 从环境变量获取超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    
    // 根据自己的业务逻辑判断请求是否成功
    // 例如：后端约定 code=200 表示成功
    if (res.code !== 200) {
      // 处理错误情况
      console.error('请求失败:', res.message || '未知错误');
      
      // 特定错误码处理，例如401表示未授权
      if (res.code === 401) {
        // 可以在这里处理登出逻辑
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      return Promise.reject(new Error(res.message || '未知错误'));
    }
    
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应错误:', error);
    
    // 处理HTTP状态码错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转到登录页
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // 权限不足
          console.error('权限不足');
          break;
        case 404:
          // 资源不存在
          console.error('请求的资源不存在');
          break;
        case 500:
          // 服务器错误
          console.error('服务器错误');
          break;
        default:
          console.error(`未处理的错误状态码: ${error.response.status}`);
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('网络错误，请检查您的网络连接');
    } else {
      // 请求配置有误
      console.error('请求配置错误:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// 封装GET请求
export function get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.get(url, { params, ...config });
}

// 封装POST请求
export function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.post(url, data, config);
}

// 封装PUT请求
export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.put(url, data, config);
}

// 封装DELETE请求
export function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return service.delete(url, config);
}

// 封装PATCH请求
export function patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.patch(url, data, config);
}

// 导出axios实例
export default service;