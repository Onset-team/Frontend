import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 창이 다시 포커스될 때마다 재요청하지 않음
    },
  },
});

async function enableMocking() { // msw 설정
  if (import.meta.env.DEV) { // 개발 환경에서만 작동
    const { worker } = await import('./mocks/browser'); // 해당 경로의 파일을 import
    return worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position='top-center' reverseOrder={false} />
    </QueryClientProvider>
  );
});
