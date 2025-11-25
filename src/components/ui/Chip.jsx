import { cn } from '@/utils/cn';
import React from 'react';
import Typography from './Typography';
import IconPark from '@/assets/icons/IconPark.svg';
import IconSquare from '@/assets/icons/IconSquare.svg';
import IconStreet from '@/assets/icons/IconStreet.svg';
import IconHeart from '@/assets/icons/IconHeart.svg';

export default function Chip({ variant, direction = 'horizontal', value, selected, onChange }) {
  const variants = {
    park: {
      icon: IconPark,
      label: '강변/공원',
    },
    square: {
      icon: IconSquare,
      label: '광장',
    },
    street: {
      icon: IconStreet,
      label: '거리',
    },
    bookmark: {
      icon: IconHeart,
      label: '관심',
    },
  };

  const current = variants[variant];

  const isHorizontal = direction === 'horizontal';

  // 방향에 따른 레이아웃 설정
  const layoutClasses = isHorizontal ? 'flex-row h-[30px] px-3' : 'flex-col py-2 px-2 gap-1';
  const alignClasses = isHorizontal ? 'items-center justify-center' : 'items-center justify-center';

  // 방향에 따른 아이콘/텍스트 색상 설정
  let bgColorClass;
  let iconFillColorClass;
  let textColorProp;

  if (selected) {
    iconFillColorClass = isHorizontal
      ? '[&_path]:fill-stoov-gray-100'
      : '[&_path]:fill-stoov-orange-500';
    bgColorClass = isHorizontal
    ? 'bg-stoov-gray-900'
    : 'bg-stoov-white-100'
    textColorProp = isHorizontal ? 'gray100' : 'primary';
  } else {
    iconFillColorClass = isHorizontal
      ? '[&_path]:fill-stoov-gray-900'
      : '[&_path]:fill-stoov-gray-300';
    bgColorClass = 'bg-stoov-white-100'
    textColorProp = isHorizontal ? 'gray900' : 'gray300';
  }

  return (
    <button
      aria-label={current.label}
      type='button'
      onClick={() => onChange(value)}
      className={cn(
        'shadow-chip flex rounded-full',
        layoutClasses,
        alignClasses,
        bgColorClass
      )}
    >
      <div className='text-stoov-white-100'>
        <current.icon
          className={cn(
            'h-4 w-4',
            iconFillColorClass,
          )}
          aria-hidden='true'
        />
      </div>
      <Typography variant='labelMd1' color={textColorProp}>
        {current.label}
      </Typography>
    </button>
  );
}
