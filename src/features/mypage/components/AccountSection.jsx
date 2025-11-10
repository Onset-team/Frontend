import React from 'react';
// 컴포넌트
import Typography from '@/components/ui/Typography';
export default function AccountSection({ version = '1.0.0', onAccountDelete }) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Typography
        onClick={onAccountDelete}
        as='button'
        variant='labelSm2'
        color='gray200'
        className='underline'
      >
        탈퇴하기
      </Typography>

      <Typography variant='labelSm3' color='gray300'>
        버전 {version}
      </Typography>
    </div>
  );
}
