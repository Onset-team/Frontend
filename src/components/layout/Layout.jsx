import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// 컴포넌트
import BottomBar from '@/components/layout/BottomBar';
import Header from '@/components/layout/Header';

export default function Layout() {
  // 로그인 페이지 구분
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  return (
    <div className='bg-stoov-gray-900 relative mx-auto flex min-h-dvh w-full max-w-[500px] flex-col'>
      <Header />

      <main className='flex-1 pt-15 pb-[58px]'>
        <Outlet className='p-1' />
      </main>

      {!isAuthPage && <BottomBar />}
    </div>
  );
}
