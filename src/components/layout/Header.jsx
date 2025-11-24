import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// 스토어
import { useHeaderStore } from '@/stores/useHeaderStore';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 아이콘
import Logo from '@/assets/logo.svg';
import IconLeft from '@/assets/icons/IconLeft.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, title } = useHeaderStore();

  const path = location.pathname;
  let currentMode = mode; // 'logo' | 'title' | 'back'
  let currentTitle = title;

  if (path === '/' || path === ':placeId') {
    currentMode = 'logo';
  } else if (path === '/bookmark') {
    currentMode = 'title';
    currentTitle = '관심';
  } else if (path === '/mypage') {
    currentMode = 'title';
    currentTitle = '마이 프로필';
  } else if (path !== '/' && path === '/login' && path !== '/bookmark' && path !== '/mypage') {
    currentMode = 'back';
  }

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <header
      className={cn(
        'bg-stoov-gray-900 fixed top-0 left-1/2 z-50 flex h-15 w-full max-w-[500px] -translate-x-1/2 items-center px-4',
        currentMode === 'logo' ? 'justify-center' : 'justify-start',
      )}
    >
      {currentMode === 'logo' && (
        <Link to='/' className='flex items-center'>
          <Logo className='h-9 w-[84px]' />
        </Link>
      )}

      {currentMode === 'title' && (
        <Typography as='h2' variant='titleLg'>
          {currentTitle}
        </Typography>
      )}

      {currentMode === 'back' && (
        <Button onClick={goBack} variant='icon' size='iconLg' aria-label='뒤로가기'>
          <IconLeft className='text-stoov-gray-100' aria-hidden='true' />
        </Button>
      )}
    </header>
  );
}
