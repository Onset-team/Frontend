// components/ui/FloatingChip.jsx
import React from 'react';
import { cn } from '@/utils/cn';

export default function FloatingChip({ 
  bottomSheetHeight, // vh 단위 숫자 (예: 50)
  visible,           // boolean
  children,
  className 
}) {
  return (
    <div
      className={cn(
        'absolute right-4 z-50 transition-all duration-300',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className
      )}
      style={{
        bottom: `calc(${bottomSheetHeight}vh + 16px)`
      }}
    >
      {children}
    </div>
  );
}