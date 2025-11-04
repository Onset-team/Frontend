import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
// 컴포넌트
import Layout from '@/components/layout/Layout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import ScrollToTop from '@/components/layout/ScrollToTop';
import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/pages/HomePage';
import InterestPage from '@/features/interest/pages/InterestPage';
import Mypage from '@/features/mypage/pages/Mypage';

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
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
