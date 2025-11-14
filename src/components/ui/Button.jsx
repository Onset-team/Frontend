import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  cn(
    'flex w-full items-center justify-center transition-colors duration-200',
    'disabled:bg-stoov-gray-200 disabled:text-stoov-gray-300 disabled:pointer-events-none disabled:cursor-not-allowed',
  ),

  {
    variants: {
      variant: {
        primary: 'bg-stoov-orange-500 text-stoov-gray-100',
        secondary: 'text-stoov-gray-800 bg-stoov-gray-200',
        iconText: 'bg-stoov-white-200 text-stoov-orange-500 gap-1',
        icon: 'text-stoov-gray-400 bg-transparent',
      },
      size: {
        sm: 'h-10 rounded-xl px-5 text-sm leading-5 font-medium', // height: 40px, border-radius: 10px, font-size:14px, line-height: 20px, font-weight: 500
        lg: 'h-12 rounded-lg px-5 text-base leading-3 font-semibold', // height: 48px, border-radius: 8px, font-size:16px, line-height: 16px, font-weight: 600
        iconText: 'h-10 w-[132px] rounded-lg text-sm leading-5 font-semibold', // height: 32px, border-radius: 8px, font-size:14px, line-height: 20px, font-weight: 600
        iconXs: 'h-[18px] w-[18px]',
        iconSm: 'h-6 w-6', // height, width: 24px,
        iconLg: 'h-10 w-10', // height, width: 40px,
        iconXl: 'h-12 w-12', // height, width: 48px,
      },
      rounded: {
        sm: 'rounded-sm', // 4px
        md: 'rounded-md', // 6px
        lg: 'rounded-lg', // 8px
        xl: 'rounded-xl', // 10px
        xxxl: 'rounded-3xl', // 20px
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
      rounded: '',
    },
  },
);

const Button = forwardRef(
  ({ variant, size, rounded, className, disabled, children, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, rounded }), className)}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
