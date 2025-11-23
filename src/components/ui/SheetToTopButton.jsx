import React, { useEffect, useState } from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';
// 아이콘
import IconTop from '@/assets/icons/IconTop.svg';

export default function SheetToTopButton({ targetEl, isBottombar = true }) {
  const [isVisible, setIsVisible] = useState(false);

  // 50px 이상 스크롤 했을 때 버튼 표시
  const handleScroll = () => {
    if (!targetEl) return;

    const currentScroll = targetEl.scrollTop;
    setIsVisible(currentScroll > 50);
  };

  // 클릭 시 맨 위로
  const scrollToTop = () => {
    if (!targetEl) return;

    targetEl.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 스크롤 감지
  useEffect(() => {
    if (!targetEl) return;

    targetEl.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태

    return () => {
      targetEl.removeEventListener('scroll', handleScroll);
    };
  }, [targetEl]);

  return (
    <div className='fixed bottom-0 left-1/2 z-50 w-full max-w-[500px] -translate-x-1/2'>
      <Button
        size='iconXl'
        rounded='full'
        onClick={scrollToTop}
        aria-label='위로'
        className={cn(
          'bg-stoov-gray-200 shadow-btn absolute right-4 transition-all duration-300',
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
          isBottombar ? 'bottom-[82px]' : 'bottom-6',
        )}
      >
        <IconTop aria-hidden='true' className='text-stoov-gray-500' />
      </Button>
    </div>
  );
}
