import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'disabled:bg-stoov-gray-100 disabled:border-stoov-gray-100 disabled:text-stoov-gray-300 flex w-full items-center justify-center font-medium transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        fill: 'bg-stoov-orange-500 text-stoov-white',
        line: 'border-stoov-orange-500 bg-stoov-white-100 text-stoov-gray-400 border',
        icon: 'text-stoov-gray-400 bg-transparent',
      },
      size: {
        sm: 'h-8 px-3 text-sm', // height: 32px, padding-left, right: 12px, font-size: 12px
        md: 'h-10 px-4 text-base', // height: 40px, padding-left, right: 16px, font-size: 16px
        lg: 'h-12 px-6 text-lg', // height: 48px, padding-left, right: 24px, font-size: 18px
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
      variant: 'fill',
      size: 'md',
      rounded: 'md',
    },
  },
);

const Button = forwardRef(
  ({ variant, size, rounded, className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded }), className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
