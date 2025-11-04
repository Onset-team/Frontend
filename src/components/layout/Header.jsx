import React from 'react';
import { Link } from 'react-router-dom';
// 아이콘
import Logo from '@/assets/logo.svg';

export default function Header() {
  return (
    <header className='bg-stoov-gray-900 fixed top-0 left-1/2 flex h-15 w-full max-w-[500px] -translate-x-1/2 justify-center shadow-[0px_2px_3px_0px_rgba(0,0,0,0.25)]'>
      <Link to='/' className='flex w-[84px] items-center'>
        <Logo className='h-full w-full' />
      </Link>
    </header>
  );
}
