import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import BottomBar from '@/components/layout/BottomBar';
import Header from '@/components/layout/Header';

export default function Layout() {
  const isLoginPage = useMatch('/login'); // 로그인
  const isAgreementPage = useMatch('/agreement/*'); // 이용약관
  const isPlacesDetailPage = useMatch('/places/:placeId'); // 상세페이지
  const isPlacesPage = useMatch('/places/:placeId/reviews/new'); // 후기 작성
  const isReviewPage = useMatch('/reviews/*'); // 후기 수정

  // 바텀바 숨김
  const hideBottomBar = isLoginPage || isAgreementPage || isPlacesPage || isReviewPage;

  // 헤더 숨김
  const hideHeader = isPlacesPage || isReviewPage;

  // 슬라이드 페이지
  const isSlidePage = isPlacesDetailPage || isPlacesPage || isReviewPage || isAgreementPage;
  // 상세 페이지 추가하면 후기페이지에서 슬라이드가 안됨??

  return (
    <div className='bg-stoov-gray-900 relative mx-auto flex min-h-dvh w-full max-w-[500px] flex-col overflow-hidden'>
      <div
        className={cn(
          'flex min-h-dvh flex-col',
          isSlidePage && 'animate-slideInFromRight', // 슬라이드 페이지
        )}
      >
        {!hideHeader && <Header />}

        <main className={cn('flex-1 pt-15', hideBottomBar ? 'pb-8' : 'pb-[58px]')}>
          <Outlet className='p-1' />
        </main>

        {!hideBottomBar && <BottomBar />}
      </div>
    </div>
  );
}
