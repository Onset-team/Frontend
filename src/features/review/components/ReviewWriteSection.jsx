import React from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 아이콘
import IconPen from '@/assets/icons/IconPen.svg';

export default function ReviewWriteSection({ onClick }) {
  return (
    <div className='flex flex-col items-center gap-4 py-4'>
      <Typography variant='bodyMd'>장소에 대한 느낌과 공연 경험을 남겨보세요!</Typography>

      <Button variant='iconText' size='iconText' onClick={onClick}>
        <IconPen />
        장소 후기 쓰기
      </Button>
    </div>
  );
}
