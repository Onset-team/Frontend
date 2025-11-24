import React from 'react';
import Logo from '@/assets/logo.svg';
import Typography from '@/components/ui/Typography';

export default function LoginLogo() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>

      {/* 로고 */}
      <Logo />

      <div className='flex flex-col items-center justify-center'>

        {/* 타이틀 */}
        <Typography variant='titleLg' color='white100'>
          거리의 에너지가
        </Typography>
        <Typography variant='titleLg' color='white100'>
          공연으로 이어지는 순간
        </Typography>

        {/* 소개문 */}
        <Typography variant='bodysm' color='gray100'>
          새로운 버스킹 장소를 탐색해보세요.
        </Typography>
      </div>
    </div>
  );
}
