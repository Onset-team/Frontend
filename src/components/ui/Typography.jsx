import React from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      // Heading
      headingLg: 'text-3xl leading-9 font-semibold', // font-size:24px, line-height: 32px, font-weight: 600
      headingSm: 'text-2xl leading-8 font-bold', // font-size:22px, line-height: 28px, font-weight: 700
      // Title
      titleLg: 'text-xl leading-8 font-semibold', // font-size:20px, line-height: 28px, font-weight: 600
      titleSm: 'text-lg leading-6 font-semibold', // font-size:18px, line-height: 22px, font-weight: 600
      // Body
      bodyLg: 'text-lg leading-7 font-medium', // font-size:18px, line-height: 24px, font-weight: 500
      bodyMd: 'text-base leading-6 font-medium', // font-size:16px, line-height: 22px, font-weight: 500
      bodySm1: 'text-sm leading-5 font-medium', // font-size:14px, line-height: 20px, font-weight: 500
      bodySm2: 'text-sm leading-5 font-normal', // font-size:14px, line-height: 20px, font-weight: 400
      // Label
      labelLg: 'text-base leading-3 font-semibold', // font-size:16px, line-height: 16px, font-weight: 600
      labelMd1: 'text-sm leading-5 font-semibold', // font-size:14px, line-height: 20px, font-weight: 600
      labelMd2: 'text-sm leading-5 font-medium', // font-size:14px, line-height: 20px, font-weight: 500
      labelMd3: 'text-sm leading-5 font-normal', // font-size:14px, line-height: 20px, font-weight: 400
      labelSm1: 'text-xs leading-4 font-semibold', // font-size:12px, line-height: 18px, font-weight: 600
      labelSm2: 'text-xs leading-4 font-medium', // font-size:12px, line-height: 18px, font-weight: 500
      labelSm3: 'text-xs leading-4 font-normal', // font-size:12px, line-height: 18px, font-weight: 400
    },

    color: {
      default: 'text-stoov-white-100', // #ffffff
      primary: 'text-stoov-orange-500', // #ec3910
      black: 'text-stoov-gray-900', // #222222
      gray100: 'text-stoov-gray-100', // #dedede
      gray200: 'text-stoov-gray-200', // #c7c7c7
      gray300: 'text-stoov-gray-300', //#999999
      gray400: 'text-stoov-gray-400', //#808080
      gray500: 'text-stoov-gray-500', //#666666
      gray600: 'text-stoov-gray-600', //#4d4d4d
      gray800: 'text-stoov-gray-800', //#3a3a3a
      gray900: 'text-stoov-gray-900', //#222222
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
    align: 'left',
  },
});

export default function Typography({
  as: Comp = 'p',
  variant,
  color,
  align,
  className,
  children,
  ...props
}) {
  return (
    <Comp className={cn(typographyVariants({ variant, color, align }), className)} {...props}>
      {children}
    </Comp>
  );
}
