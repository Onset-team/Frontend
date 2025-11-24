import React from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';

export default function Dropdown({ items = [], onItemClick, className }) {
  return (
    <div
      className={cn(
        'shadow-dropdown w-[70px] overflow-hidden rounded-sm',
        'animate-dropdownIn transition-all duration-200',
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={item.id}>
          <Typography
            as='button'
            variant='labelSm1'
            align='center'
            onClick={() => onItemClick?.(item.id)}
            className={cn(
              'text-stoov-gray-100 bg-stoov-gray-400 w-full p-3',
              'border-stoov-gray-300 border-t',
              i === 0 && 'border-none',
            )}
          >
            {item.label}
          </Typography>
        </li>
      ))}
    </div>
  );
}
