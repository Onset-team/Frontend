import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/assets/logo.svg';

export default function HomePage() {
  return (
    <div>
      <Link to='/' className='flex w-[300px] items-center'>
        <Logo className='h-full w-full' />
      </Link>

      <div className=''>
        <h3>font-weight</h3>
        <div className='font-extralight'>200 extralight</div>
        <div className='font-light'>300 light</div>
        <div className='font-normal'>400 normal</div>
        <div className='font-medium'>500 medium</div>
        <div className='font-semibold'>600 semibold</div>
        <div className='font-bold'>700 bold</div>
        <div className='font-extrabold'>800 extrabold</div>
        <div className='font-black'>900 black</div>
      </div>

      <div className=''>
        <h3>font-size</h3>
        <div className='text-stoov-gray-100 text-xs'>12px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-200 text-sm'>14px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-300 text-base'>16px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-400 text-lg'>18px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-500 text-xl'>20px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-800 text-2xl'>24px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-gray-900 text-3xl'>30px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-orange-100 text-4xl'>36px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-orange-500 text-5xl'>48px 안녕하세요 스투브입니다.</div>
        <div className='text-stoov-orange-700 text-6xl'>60px 안녕하세요 스투브입니다.</div>
      </div>
    </div>
  );
}
