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

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, title } = useHeaderStore();

  const path = location.pathname;
  let currentMode = mode; // 'logo' | 'title' | 'back'
  let currentTitle = title;

  if (path === '/') {
    currentMode = 'logo';
  } else if (path === '/interest') {
    currentMode = 'title';
    currentTitle = '관심';
  } else if (path === '/mypage') {
    currentMode = 'title';
    currentTitle = '마이 프로필';
  } else if (path !== '/' && path !== '/interest' && path !== '/mypage') {
    currentMode = 'back';
  }

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <header
      className={cn(
        'bg-stoov-gray-900 fixed top-0 left-1/2 flex h-15 w-full max-w-[500px] -translate-x-1/2 items-center px-4',
        currentMode === 'logo'
          ? 'justify-center shadow-[0px_2px_3px_0px_rgba(0,0,0,0.25)]'
          : 'justify-start',
      )}
    >
      {currentMode === 'logo' && (
        <Link to='/' className='flex w-[84px] items-center'>
          <Logo className='h-full w-full' />
        </Link>
      )}

      {currentMode === 'title' && (
        <Typography as='h2' variant='title' weight='semiBold'>
          {currentTitle}
        </Typography>
      )}

      {currentMode === 'back' && (
        <Button onClick={goBack} variant='icon' size='iconLg'>
          👈
        </Button>
      )}
    </header>
  );
}
