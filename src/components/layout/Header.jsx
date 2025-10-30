import React from 'react';
import { Link } from 'react-router-dom';
// 아이콘
import Logo from '@/assets/logo.svg';

export default function Header() {
  return (
    <div>
      <Link to='/' className='flex w-[120px] items-center'>
        <Logo className='h-full w-full' />
      </Link>
    </div>
  );
}
