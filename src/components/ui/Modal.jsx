import React, { useEffect } from 'react';
import { cva } from 'class-variance-authority';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

// 1) 오버레이 + 위치
const modalOverlay = cva(
  'fixed inset-0 right-0 bottom-0 left-0 z-60 mx-auto flex max-w-[500px] bg-black/70 transition-all duration-200',
  {
    variants: {
      variant: {
        center: 'items-center justify-center',
        bottom: 'items-end justify-center',
      },
    },
    defaultVariants: {
      variant: 'center',
    },
  },
);

// 2) 실제 모달 박스
const modalBox = cva('bg-stoov-gray-900 relative w-full shadow-lg transition-all duration-200', {
  variants: {
    variant: {
      center: 'animate-fadeInUp max-w-[80%] overflow-hidden rounded-2xl',
      bottom: 'animate-slideUp rounded-t-2xl',
    },
  },
  defaultVariants: {
    variant: 'center',
  },
});

export default function Modal({
  isOpen,
  onClose,
  variant = 'center',
  title,
  closable = true,
  leftButtonLabel,
  rightButtonLabel,
  onLeftButtonClick,
  onRightButtonClick,
  children,
  className,
}) {
  // 모달 호출 시 스크롤 막기
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={modalOverlay({ variant })} onClick={onClose}>
      <div className={cn(modalBox({ variant }), className)} onClick={(e) => e.stopPropagation()}>
        {/* 모달 헤더 */}
        {(title || closable) && (
          <div className='flex items-center justify-between gap-2 px-5 py-4 text-gray-800'>
            {title && (
              <Typography as='h2' variant='title' weight='semiBold' color='default'>
                {title}
              </Typography>
            )}

            {closable && (
              <button
                onClick={onClose}
                className='rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700'
              >
                <div>x</div>
              </button>
            )}
          </div>
        )}

        {/* 모달 컨텐츠 */}
        <div className='max-h-[70vh] overflow-y-auto px-5 py-4'>{children}</div>

        {/* 모달 버튼 */}
        {(leftButtonLabel || rightButtonLabel) && (
          <div className='flex gap-3 px-4 pb-4'>
            {leftButtonLabel && (
              <Button onClick={onLeftButtonClick} variant='line'>
                {leftButtonLabel}
              </Button>
            )}
            {rightButtonLabel && <Button onClick={onRightButtonClick}>{rightButtonLabel}</Button>}
          </div>
        )}
      </div>
    </div>
  );
}
