import React from 'react';
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // 로그인 여부에 따라 로그인 페이지로 리다이렉트
  return (
    <div>
      <Outlet />
    </div>
  );
}
