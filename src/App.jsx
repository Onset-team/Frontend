import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/HomePage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
