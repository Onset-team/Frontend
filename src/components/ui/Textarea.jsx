import React from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';

export default function Textarea({
  value = '',
  onChange,
  isCount = true,
  maxLength = 1000,
  className,
  ...rest
}) {
  const handleChange = (e) => {
    onChange?.(e);
  };

  const length = value ? value.length : 0;

  return (
    <div className='flex flex-col gap-2'>
      <textarea
        value={value}
        onChange={handleChange}
        maxLength='1000'
        className={cn(
          'h-[300px] w-full resize-none overflow-y-auto rounded-lg p-5 whitespace-pre-line outline-none',
          'bg-stoov-gray-800 border-stoov-gray-800 text-stoov-white-100 border',
          'text-sm leading-5 font-medium',
          'placeholder:text-stoov-gray-300 focus:border-stoov-orange-100',
          className,
        )}
        {...rest}
      />
      {isCount && (
        <Typography variant='labelSm3' color='gray200' align='right'>
          {length}/{maxLength}
        </Typography>
      )}
    </div>
  );
}
