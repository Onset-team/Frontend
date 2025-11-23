import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // 10초
  withCredentials: true, // 쿠키 인증 쓰면 true로 변경
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 accessToken을 가져옴

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // Authorization 헤더에 토큰을 추가
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;

    // 네트워크 에러
    if (!response) {
      console.error('[Network Error]', error);
      return Promise.reject({
        message: '서버와 연결할 수 없습니다.',
        status: null,
      });
    }

    const { status, data } = response;

    // 공통 에러
    switch (status) {
      case 400:
        console.warn('400 Bad Request:', data);
        break;
      case 401:
        console.warn('401 Unauthorized');
        // 토큰 만료 시 로그아웃 처리 넣어도 됨
        break;
      case 403:
        console.warn('403 Forbidden');
        break;
      case 404:
        console.warn('404 Not Found');
        break;
      case 500:
        console.error('500 Server Error');
        break;
      default:
        console.error(`${status} Error`, data);
    }

    return Promise.reject({
      status,
      code: data?.error?.code ?? 'UNKNOWN_ERROR',
      message: data?.error?.message ?? data?.message ?? '요청 중 오류가 발생했습니다.',
      timestamp: data?.timestamp,
      raw: data,
    });
  },
);

export default api;
