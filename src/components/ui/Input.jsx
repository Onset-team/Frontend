import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const inputVariants = cva(
  // 디자인 시스템 나오면 수정 필요
  'bg-stoov-white-100 w-full border text-sm transition-colors duration-150 outline-none placeholder:text-gray-400',
  {
    variants: {
      size: {
        sm: 'h-8 px-2',
        md: 'h-10 px-3',
        lg: 'h-11 px-4 text-base',
      },
      state: {
        default:
          'focus:border-stoov-orange-500 focus:ring-stoov-orange-100 border-gray-300 focus:ring-2',
        error: 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100',
        disabled:
          'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 focus:border-gray-200 focus:ring-0',
      },
      rounded: {
        md: 'rounded-md',
        full: 'rounded-full',
      },
      leftSlot: {
        true: 'pl-10',
        false: '',
      },
      rightSlot: {
        true: 'pr-10',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
      rounded: 'md',
      leftSlot: false,
      rightSlot: false,
    },
  },
);

const Input = forwardRef(
  (
    {
      id,
      type = 'text',
      name,
      label,
      errorMessage,
      size,
      state,
      rounded,
      className,
      leftSlot,
      rightSlot,
      ...props
    },
    ref,
  ) => {
    const isError = state === 'error' || !!errorMessage;

    return (
      <div className='flex w-full flex-col gap-1'>
        {/* 라벨 */}
        {label && (
          <label htmlFor={id} className='flex items-center gap-1 text-sm font-medium text-white'>
            {label}
          </label>
        )}

        {/* 인풋 */}
        <div className='relative w-full'>
          {leftSlot && (
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400'>
              {leftSlot}
            </div>
          )}

          <input
            id={id}
            name={name}
            ref={ref}
            type={type}
            disabled={state === 'disabled'}
            className={cn(
              inputVariants({
                size,
                state,
                rounded,
                leftSlot: !!leftSlot,
                rightSlot: !!rightSlot,
              }),
              className,
            )}
            {...props}
          />

          {rightSlot && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2'>{rightSlot}</div>
          )}
        </div>

        {/* 에러 메세지 */}
        {isError && errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      </div>
    );
  },
);

// displayName 설정하지 않으면 forwardRef로 보임
Input.displayName = 'Input';
export default Input;
