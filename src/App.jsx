import { useEffect } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Toaster } from 'react-hot-toast';
import { useOnlineStatusStore } from './stores/useOnlineStatusStore';

// 컴포넌트
import Layout from '@/components/layout/Layout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import ScrollToTop from '@/components/layout/ScrollToTop';
// 로그인 필요 업는 페이지
import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/pages/HomePage';
import PlaceDetailPage from '@/features/placeDetail/containers/PlaceDetailPage';
// 로그인 필요한 페이지
import BookmarkPage from '@/features/bookmark/pages/BookmarkPage';
import ReviewWritePage from '@/features/review/components/ReviewWriteModal';
import Mypage from '@/features/mypage/pages/Mypage';

import MapTest from './features/map/pages/MapTest';
import HttpTest from './features/test/pages/HttpTest';
import NetworkTest from './features/test/pages/NetworkTest';

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Analytics /> {/* 사용자 행동 분석 */}
        <SpeedInsights /> {/* 성능 측정 */}
        <Outlet />
        <Toaster
          position='bottom-center'
          reverseOrder={false}
          containerStyle={{
            zIndex: 1000,
            bottom: '78px',
          }}
          toastOptions={{
            duration: 1500,
            className:
              '!rounded-lg !text-stoov-white-100 !bg-stoov-gray-500 !text-stoov-white !px-5 !py-2 !text-sm !leading-5 !font-normal !shadow-toast',
          }}
        />
      </>
    ),
    children: [
      {
        element: <Layout />,
        children: [
          // 1. 로그인 필요 없는 페이지
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/', // 홈
            element: <HomePage />,
          },
          { path: '/test', element: <MapTest /> },
          { path: '/test2', element: <HttpTest /> },
          { path: '/network', element: <NetworkTest /> },
          {
            path: '/places/:placeId',
            element: <PlaceDetailPage />, // 관심페이지에서 진입
          },

          // 2. 로그인 필요한 페이지
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: '/bookmark', // 관심
                element: <BookmarkPage />,
              },
              {
                path: '/mypage', // 마이
                element: <Mypage />,
              },
            ],
          },

          // 그 외 모든 경로
          {
            path: '*',
            element: <Navigate to='/' replace />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  // 네트워크 상태 세팅
  useEffect(() => {
    const cleanup = useOnlineStatusStore.getState().initialize();
    return cleanup; // 컴포넌트 언마운트 시 cleanup 실행
  }, []);

  return <RouterProvider router={router} />;
}
