import React, { useEffect, useState } from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';

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
    <div className='fixed right-0 bottom-0 left-0 z-60 mx-auto h-0 max-w-[500px]'>
      <Button
        onClick={scrollToTop}
        size='lg'
        rounded='full'
        aria-label='위로'
        className={cn(
          'absolute right-5 bottom-20 w-12 transition-all duration-300',
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
        )}
      >
        👆
      </Button>
    </div>
  );
}
