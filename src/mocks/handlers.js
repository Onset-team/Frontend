import { http, HttpResponse } from 'msw';

export const handlers = [
  // 정상 응답
  http.get('/api/users', () => {
    return HttpResponse.json({ name: '홍길동' });
  }),

  // 400 에러
  http.get('/api/error/400', () => {
    return new HttpResponse(null, { status: 400 });
  }),

  // 401 에러
  http.get('/api/error/401', () => {
    return new HttpResponse(null, { status: 401 });
  }),

  // 403 에러
  http.get('/api/error/403', () => {
    return new HttpResponse(null, { status: 403 });
  }),

  // 404 에러
  http.get('/api/error/404', () => {
    return new HttpResponse(null, { status: 404 });
  }),

  // 500 에러
  http.get('/api/error/500', () => {
    return new HttpResponse(null, { status: 500 });
  }),
];
