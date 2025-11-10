import React, { useState } from 'react';
// 유틸
import { cn } from '@/utils/cn';
import Typography from '@/components/ui/Typography';

export default function Textarea({ className, isCount = true, ...props }) {
  const [textareaCount, setTextareaCount] = useState(0);

  const handleChange = (e) => {
    setTextareaCount(e.target.value.length);
  };

  return (
    <div className='flex flex-col gap-2'>
      <textarea
        onChange={handleChange}
        maxLength='2000'
        className={cn(
          'max-h-[300px] min-h-[180px] w-full resize-none overflow-y-auto rounded-lg p-5 whitespace-pre-line outline-none',
          'bg-stoov-gray-800 border-stoov-gray-800 text-stoov-white-100 border',
          'text-sm leading-5 font-medium',
          'placeholder:text-stoov-gray-300 focus:border-stoov-orange-100',
          className,
        )}
        {...props}
      />
      {isCount && (
        <Typography variant='labelSm3' color='gray200' align='right'>
          {textareaCount}/2000
        </Typography>
      )}
    </div>
  );
}
