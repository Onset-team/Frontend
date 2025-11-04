import React from 'react';
import { NavLink } from 'react-router-dom';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';

const NAV_ITEMS = [
  {
    id: 'nearby',
    label: '장소',
    to: '/',
    icon: '🗺️',
    iconActive: '📍',
  },
  {
    id: 'interest',
    label: '관심',
    to: '/interest',
    icon: '🤍',
    iconActive: '♥️',
  },
  {
    id: 'mypage',
    label: '마이',
    to: '/mypage',
    icon: '👤',
    iconActive: '👨‍🎤',
  },
];

export default function BottomBar() {
  return (
    <nav className='bg-stoov-gray-900 fixed bottom-0 left-1/2 z-50 flex h-14 w-full max-w-[500px] -translate-x-1/2 px-4 py-2'>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className={({ isActive }) =>
            cn(
              'flex w-full flex-col items-center justify-center gap-1 text-center transition-colors duration-150',
              isActive ? 'text-stoov-orange-500' : 'text-stoov-white-100',
            )
          }
        >
          {({ isActive }) => (
            <>
              <div className='h-6 w-6 text-xl'>{isActive ? item.iconActive : item.icon}</div>

              <Typography variant='captionSm' weight='medium' className='text-inherit'>
                {item.label}
              </Typography>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
