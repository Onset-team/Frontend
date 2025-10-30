import React from 'react';
import { Outlet } from 'react-router-dom';
// 컴포넌트
import BottomBar from '@/components/layout/BottomBar';
import Header from '@/components/layout/Header';

export default function Layout() {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='bg-stoov-gray-900 relative mx-auto flex min-h-screen w-full max-w-[500px] flex-col shadow-lg'>
          <Header />

          <main className='flex-1'>
            <Outlet />
          </main>

          <BottomBar />
        </div>
      </div>
    </div>
  );
}
