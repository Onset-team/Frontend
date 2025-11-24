import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

export default function ConfirmModal({
  isOpen,
  onClose,
  title,
  desc,
  leftButtonLabel = '취소',
  rightButtonLabel = '삭제',
  onConfirm,
}) {
  // 모달 호출 시 스크롤 막기
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={cn(
        'fixed bottom-0 left-1/2 z-50 h-full w-full max-w-[500px] -translate-x-1/2',
        'animate-fadeIn transition-all duration-200',
      )}
    >
      <div
        onClick={onClose}
        className='h-full w-full bg-black/50 transition-all duration-200'
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'bg-stoov-gray-800 flex w-5/6 max-w-[328px] flex-col gap-4 overflow-hidden rounded-xl px-4 py-5',
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        {/* 모달 컨텐츠 */}

        <div className='flex flex-col items-center gap-1'>
          <Typography as='h2' variant='titleLg'>
            {title}
          </Typography>
          {desc && (
            <Typography
              variant='labelMd2'
              color='gray100'
              className='text-center whitespace-pre-line'
            >
              {desc}
            </Typography>
          )}
        </div>

        {/* 모달 버튼 */}
        {(leftButtonLabel || rightButtonLabel) && (
          <div className='flex gap-2'>
            {leftButtonLabel && (
              <Button onClick={onClose} variant='secondary' aria-label={leftButtonLabel}>
                {leftButtonLabel}
              </Button>
            )}
            {rightButtonLabel && (
              <Button onClick={onConfirm} aria-label={rightButtonLabel}>
                {rightButtonLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
