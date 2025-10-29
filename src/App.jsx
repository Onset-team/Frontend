import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/HomePage';
import MapTest from './features/map/test/MapTest';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
    { path: '/test', element: <MapTest /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
