import React from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const typographyVariants = cva('', {
  // 디자인 시스템 나오면 수정 필요
  variants: {
    variant: {
      display: 'text-3xl', // 30px
      h1: 'text-2xl', // 24px
      title: 'text-xl', // 20px
      titleSm: 'text-lg', // 18px
      body: 'text-base', // 16px
      caption: 'text-sm', // 14px
      captionSm: 'text-xs', // 12px
    },
    weight: {
      regular: 'font-normal', // 400
      medium: 'font-medium', // 500
      semiBold: 'font-semibold', // 600
      bold: 'font-bold', // 700
    },
    color: {
      default: 'text-stoov-white-100', // #ffffff
      primary: 'text-stoov-orange-500', // #ec3910
      black: 'text-stoov-gray-900', // #222222
      gray: 'text-stoov-gray-100', // #dedede
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'regular',
    color: 'default',
    align: 'left',
  },
});

export default function Typography({
  as: Comp = 'p',
  variant,
  weight,
  color,
  align,
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(typographyVariants({ variant, weight, color, align }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
