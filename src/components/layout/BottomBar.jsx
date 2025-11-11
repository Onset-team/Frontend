import React from 'react';
import { NavLink } from 'react-router-dom';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';
// 아이콘
import IconMapPin from '@/assets/icons/IconMapPin.svg';
import IconHeart from '@/assets/icons/IconHeart.svg';
import IconMy from '@/assets/icons/IconMy.svg';
import ToTopButton from '@/components/ui/ToTopButton';

const NAV_ITEMS = [
  {
    id: 'nearby',
    label: '장소',
    to: '/',
    icon: <IconMapPin />,
  },
  {
    id: 'favorite',
    label: '관심',
    to: '/favorite',
    icon: <IconHeart />,
  },
  {
    id: 'mypage',
    label: '마이',
    to: '/mypage',
    icon: <IconMy />,
  },
];

export default function BottomBar() {
  return (
    <div className='fixed bottom-0 left-1/2 z-50 h-[58px] w-full max-w-[500px] -translate-x-1/2'>
      <ToTopButton />

      <nav className='bg-stoov-gray-900 flex py-2'>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex w-full flex-col items-center justify-center text-center transition-colors duration-150',
                isActive ? 'text-stoov-orange-500' : 'text-stoov-white-100',
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className='flex items-center'>{item.icon}</div>
                <Typography variant={isActive ? 'labelSm2' : 'labelSm3'} className='text-inherit'>
                  {item.label}
                </Typography>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
