import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'disabled:bg-stoov-gray-100 disabled:border-stoov-gray-100 disabled:text-stoov-gray-300 flex w-full items-center justify-center font-medium transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        fill: 'bg-stoov-orange-500 hover:bg-stoov-orange-600 text-stoov-white',
        line: 'border-stoov-orange-500 hover:bg-stoov-white-200 bg-stoov-white-100 text-stoov-gray-400 border',
        icon: 'text-stoov-gray-400 hover:bg-stoov-orange-600 bg-transparent',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        iconSm: 'h-6 w-6',
        iconLg: 'h-10 w-10',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
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
