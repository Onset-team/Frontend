import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
// 유틸
import { cn } from '@/utils/cn';

export default function BottomSheet() {
  const HEADER_H = 75;
  // const snapPoints = [0, 0.35, 1];
  const snapPoints = [0, 0.5];

  const [open, setOpen] = useState(false);
  const [snapIndex, setSnapIndex] = useState(1);
  // const isFull = snapIndex === 2;

  const sheetRef = useRef(null);
  const [scrollEl, setScrollEl] = useState(null);
  const contentRef = useCallback((node) => setScrollEl(node || null), []);

  const lastSnap = snapPoints.length - 1;
  const snapTo = (i) => sheetRef.current?.snapTo(i);

  // 풀스크린일 때 body 스크롤 잠금
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = prev);
    }
  }, [open]);

  // 제스처: atTop에서 휠↓/스와이프↑ → 풀스크린 (축소 로직은 생략)
  useEffect(() => {
    if (!open || !scrollEl) return;
    let startY = 0;

    const onWheel = (e) => {
      const atTop = scrollEl.scrollTop <= 0;
      // if (snapIndex < 2 && atTop && e.deltaY > 0) {
      //   if (e.cancelable) e.preventDefault();
      //   sheetRef.current?.snapTo(2);
      // }
    };
    const onTouchStart = (e) => {
      startY = e.touches?.[0]?.clientY ?? 0;
    };
    const onTouchMove = (e) => {
      const y = e.touches?.[0]?.clientY ?? 0;
      const dy = y - startY; // 음수면 위로 스와이프
      const atTop = scrollEl.scrollTop <= 0;
      // if (snapIndex < 2 && atTop && dy < -6) {
      //   if (e.cancelable) e.preventDefault();
      //   sheetRef.current?.snapTo(2);
      // }
    };

    scrollEl.addEventListener('wheel', onWheel, { passive: false });
    scrollEl.addEventListener('touchstart', onTouchStart, { passive: true });
    scrollEl.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      scrollEl.removeEventListener('wheel', onWheel);
      scrollEl.removeEventListener('touchstart', onTouchStart);
      scrollEl.removeEventListener('touchmove', onTouchMove);
    };
  }, [open, scrollEl, snapIndex]);

  return (
    <div className='relative mx-auto min-h-[calc(100vh-118px)] w-full max-w-[500px] bg-white'>
      {/* 페이지 상단에 전역 <Header />가 이미 레이아웃에서 렌더된 상태라고 가정 */}

      {/* 지도(샘플) */}
      <div className='relative h-full w-full'>
        <button
          onClick={() => {
            setOpen(true);
            setSnapIndex(1);
          }}
          className='rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium'
        >
          바텀시트
        </button>
      </div>

      <Sheet
        ref={sheetRef}
        isOpen={open}
        onClose={() => setOpen(false)}
        snapPoints={snapPoints}
        initialSnap={Math.min(1, lastSnap)}
        detent='content'
        onSnap={(i) => {
          setSnapIndex(i);
          if (i === 0) setOpen(false);
        }}
      >
        <Sheet.Container
          // style={{ top: `calc(${HEADER_H}px + env(safe-area-inset-top))` }}
          style={{
            // 1. 헤더 높이만큼 마진을 주어 콘텐츠를 아래로 밀어냄 (헤더와 겹치지 않게 함)
            marginTop: `${HEADER_H}px`,
            // 2. 뷰포트 전체 높이(100vh)에서 헤더 높이를 뺀 값으로 최소 높이를 설정
            //    -> 헤더를 제외한 나머지 화면을 채우고, 뷰포트가 작아지면 스크롤이 가능해짐
            // minHeight: `calc(100vh - ${HEADER_H}px)`,
          }}
          className={cn(
            '!left-1/2 max-w-[500px] !-translate-x-1/2',
            '!bg-stoov-gray-900 !shadow-bottomsheet !rounded-3xl',
            'overflow-hidden',
          )}
        >
          {/* 바텀시트 헤더 커스텀 */}
          <Sheet.Header className='!rounded-t-full py-2'>
            <div className='flex justify-center'>
              <div className='bg-stoov-gray-200 h-1 w-[34px] rounded-full' />
            </div>
          </Sheet.Header>

          <Sheet.Content
            ref={contentRef}
            disableScroll={false}
            className='touch-pan-y overflow-y-auto overscroll-contain pt-4 pb-16'
          >
            {/* 바텀 시트 내용 */}
            <div className='h-[5000px] min-h-[500px] bg-amber-300'></div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}
