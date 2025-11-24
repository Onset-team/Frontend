import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import SheetToTopButton from '@/components/ui/SheetToTopButton';

export default function BottomSheet({
  open,
  onOpenChange,
  snapPoints = [0, 0.5], // 바텀시트 높이
  initialSnap = 1, // 스냅 포인트중 어느 위치에서 처음 열릴지 결정
  contentClassName,
  onSnapChange, // 높이 변경 함수
  children,
}) {
  const [snapIndex, setSnapIndex] = useState(initialSnap);

  const sheetRef = useRef(null);
  const [scrollerEl, setScrollerEl] = useState(null);

  const contentRef = useCallback((node) => {
    if (!node) {
      setScrollerEl(null);
      return;
    }

    // 바텀시트 내부에 생성한 스크롤러를 찾아서 ref로 등록
    const scroller = node.querySelector('.react-modal-sheet-content-scroller');
    setScrollerEl(scroller);
  }, []);

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
        onSnapChange?.(i);
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
          className='relative touch-pan-y overflow-y-auto overscroll-contain pt-2 pb-[58px]'
        >
          {children}

          {/* 바텀 시트 내 탑버튼 */}
          <SheetToTopButton targetEl={scrollerEl} />
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
