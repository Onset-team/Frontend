import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import BottomBar from '@/components/layout/BottomBar';
import Header from '@/components/layout/Header';

export default function Layout() {
  // 오류 방지를 위한 훅 분리
  const isLoginPage = useMatch('/login'); // 로그인
  const isAgreementPage = useMatch('/agreement/*'); // 이용약관
  const isPlacesPage = useMatch('/places/:placeId/reviews/new'); // 후기 작성
  const isReviewPage = useMatch('/reviews/*'); // 후기 수정

  // OR 연산
  const hideBottomBar = isLoginPage || isAgreementPage || isPlacesPage || isReviewPage;

  const hideHeader = isPlacesPage || isReviewPage;
  return (
    <div className='bg-stoov-gray-900 relative mx-auto flex min-h-dvh w-full max-w-[500px] flex-col'>
      {!hideHeader && <Header />}

      <main className={cn('flex-1 pt-15', hideBottomBar ? 'pb-8' : 'pb-[58px]')}>
        <Outlet className='p-1' />
      </main>

      {!hideBottomBar && <BottomBar />}
    </div>
  );
}
