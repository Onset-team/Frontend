import React from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';

export default function EmptyState({ variant, buttonText, onButtonClick }) {
  const variants = {
    interest: {
      icon: '🤍',
      title: '아직 관심 장소가 없어요.',
      desc: `지도를 둘러보고 마음에 드는 \n 장소에 하트를 눌러보세요.`,
    },
    search: {
      icon: '🔍',
      title: '검색 결과가 없어요',
      desc: '다른 키워드로 다시 시도해보세요.',
    },
  };

  const current = variants[variant];

  return (
    <div className='flex min-h-[calc(100vh-118px)] flex-col items-center justify-center gap-5 px-4'>
      {current.icon && <div className=''>{current.icon}</div>}

      <div className='flex flex-col items-center gap-3'>
        <Typography as='h3' variant='headingSm' align='center' className='whitespace-pre-line'>
          {current.title}
        </Typography>

        <Typography variant='bodyLg' align='center' className='whitespace-pre-line'>
          {current.desc}
        </Typography>
      </div>

      {buttonText && (
        <Button onClick={onButtonClick} className='w-fit rounded-xl'>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
