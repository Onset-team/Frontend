import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
// 컴포넌트
import Layout from '@/components/layout/Layout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import ScrollToTop from '@/components/layout/ScrollToTop';
import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/pages/HomePage';
import InterestPage from '@/features/interest/pages/InterestPage';
import Mypage from '@/features/mypage/pages/Mypage';
import MapTest from './features/map/pages/MapTest';


const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Analytics />        {/* 사용자 행동 분석 */}
        <SpeedInsights />    {/* 성능 측정 */}
        <Outlet />
      </>
    ),
    children: [
      // 1. Auth 라우트
      {
        path: '/login',
        element: <LoginPage />,
      },

      {
        element: <Layout />,
        children: [
          // 2. 로그인 필요 없는 페이지

          // 페이지명 확정되면 수정 필요함(홈, 주변, 관심)
          {
            path: '/', // 홈
            element: <HomePage />,
          },
          {
            path: '/nearby', // 주변
            element: <NearbyPage />,
          },
          { path: '/test', element: <MapTest /> },

          // 3. 로그인 필요한 페이지
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: '/interest', // 관심
                element: <InterestPage />,
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
  return <RouterProvider router={router} />;
}
