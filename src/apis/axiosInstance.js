import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // 10초
  withCredentials: false, // 쿠키 인증 쓰면 true로 변경
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
    return Promise.reject(error);
  },
);
