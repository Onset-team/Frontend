import React, { useEffect, useState } from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';
// 아이콘
import IconTop from '@/assets/icons/IconTop.svg';

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 클릭 시 맨 위로
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 50px 이상 스크롤 했을 때 버튼 표시
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 스크롤 감지
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='absolute right-4 bottom-[82px]'>
      <Button
        onClick={scrollToTop}
        size='iconXl'
        rounded='full'
        aria-label='위로'
        className={cn(
          'bg-stoov-gray-200 shadow-btn transition-all duration-300',
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
        )}
      >
        <IconTop className='text-stoov-gray-500' />
      </Button>
    </div>
  );
}
