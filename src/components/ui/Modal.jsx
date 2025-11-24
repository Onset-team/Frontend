import React, { useEffect } from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
// 아이콘
import IconCancel from '@/assets/icons/IconCancel.svg';
import Typography from '@/components/ui/Typography';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  showClose = true,
  btnLabel,
  onBtnClick,
  btnDisabled = false,
}) {
  // 모달 호출 시 스크롤 막기
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='bg-stoov-gray-900 fixed bottom-0 left-1/2 z-50 h-full w-full max-w-[500px] -translate-x-1/2'>
      {(title || showClose) && (
        <div className='flex h-15 items-center justify-end gap-2 px-5 text-gray-800'>
          {title && (
            <Typography
              as='h2'
              variant='title'
              weight='semiBold'
              color='default'
              className='flex-1'
            >
              {title}
            </Typography>
          )}

          {showClose && (
            <Button variant='icon' size='iconLg' onClick={onClose}>
              <IconCancel className='text-stoov-gray-100' />
            </Button>
          )}
        </div>
      )}
      <div className='min-h-[calc(100dvh-140px)]'>{children}</div>

      {btnLabel && (
        <div className='px-4 pb-8'>
          <Button onClick={onBtnClick} disabled={btnDisabled}>
            {btnLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
