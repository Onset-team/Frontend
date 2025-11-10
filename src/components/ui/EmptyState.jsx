import React from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';

export default function EmptyState({ variant, buttonText, onButtonClick }) {
  const variants = {
    interest: {
      image: '🤍',
      title: '아직 관심 장소가 없으신가요?',
      desc: `지도를 둘러보고 마음에 드는 \n 장소에 하트를 눌러보세요.`,
    },
    search: {
      image: '🔍',
      title: '검색 결과가 없습니다.',
      desc: '다시 한번 검색해보세요!',
    },
  };

  const current = variants[variant];

  return (
    <div className='flex min-h-[calc(100vh-118px)] flex-col items-center justify-center gap-4 px-4 pt-4'>
      {current.image && <div>{current.image}</div>}

      <div className='flex flex-col items-center gap-2'>
        <Typography as='h3' variant='headingSm' align='center' className='whitespace-pre-line'>
          {current.title}
        </Typography>

        <Typography variant='bodyMd' color='gray200' align='center' className='whitespace-pre-line'>
          {current.desc}
        </Typography>
      </div>

      {buttonText && (
        <Button size='sm' onClick={onButtonClick} className='w-fit rounded-xl'>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
