// components/ui/BottomSheet.jsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
// 유틸
import { cn } from '@/utils/cn';

export default function BottomSheet({
  open,
  onOpenChange,
  snapPoints = [0, 0.5], // 바텀시트 높이
  initialSnap = 1, // 스냅 포인트중 어느 위치에서 처음 열릴지 결정
  contentClassName,
  children,
}) {
  const [snapIndex, setSnapIndex] = useState(initialSnap);

  const sheetRef = useRef(null);
  const [scrollEl, setScrollEl] = useState(null);
  const contentRef = useCallback((node) => setScrollEl(node || null), []);

  const lastSnap = snapPoints.length - 1;
  const safeInitialSnap = Math.min(initialSnap, lastSnap);

  // body 스크롤 잠금
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <Sheet
      ref={sheetRef}
      isOpen={open}
      onClose={() => onOpenChange(false)}
      snapPoints={snapPoints}
      initialSnap={safeInitialSnap}
      detent='content'
      onSnap={(i) => {
        setSnapIndex(i);
        if (i === 0) onOpenChange(false);
      }}
      className='!z-40'
    >
      <Sheet.Container className={cn('bottomsheet-container', '!-translate-x-1/2')}>
        {/* 상단바 */}
        <Sheet.Header className='!rounded-t-full py-2'>
          <div className='flex justify-center'>
            <div className='bg-stoov-gray-200 h-1 w-[34px] rounded-full' />
          </div>
        </Sheet.Header>

        <Sheet.Content
          ref={contentRef}
          disableScroll={false}
          className={cn(
            'touch-pan-y overflow-y-auto overscroll-contain pt-2 pb-[58px]',
            contentClassName,
          )}
        >
          {children}
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
