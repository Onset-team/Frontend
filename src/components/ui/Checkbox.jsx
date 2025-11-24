import React from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';

export default function Checkbox({ checked, handleChange, label = '내 후기만' }) {
  return (
    <div className='flex cursor-pointer items-center gap-2'>
      <div className='relative flex'>
        <input
          id='checkbox'
          type='checkbox'
          onChange={handleChange}
          checked={checked}
          aria-checked={checked}
          className={cn(
            'size-[18px] transform cursor-pointer appearance-none rounded border transition',
            'bg-stoov-gray-500 border-stoov-gray-300',
            'checked:border-stoov-orange-500 checked:bg-stoov-gray-800',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
        />

        {checked && (
          <svg
            className='pointer-events-none absolute inset-0 m-auto h-3 w-3 transform'
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='10'
            viewBox='0 0 12 10'
            fill='none'
          >
            <path
              d='M0.75 4.1312L5.03571 8.74978L10.75 0.75'
              stroke='#EC3910'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </div>

      <Typography as='label' variant='labelMd2' htmlFor='checkbox' className='cursor-pointer'>
        {label}
      </Typography>
    </div>
  );
}
