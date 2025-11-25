import React from 'react';
import ErrorLogin from '@/assets/images/ErrorLogin.png';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function RequireAuth() {
  return (
    <div className='flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-7 px-4'>
      <img src={ErrorLogin} width='180px' height='180px' alt='로그인 필요' fetchPriority='high' />

      {/* 로그인 유도문 */}
      <div className='flex flex-col items-center justify-center gap-4'>
        {/* 로그인 유도문 */}
        <div className='flex flex-col items-center justify-center gap-4'>
          <Typography variant='headingSm' color='white100'>
            로그인 후 이용해주세요.
          </Typography>
          <Typography variant='bodyMd' color='gray200'>
            STOOV의 다양한 서비스를 사용할 수 있어요.
          </Typography>
        </div>

        {/* 로그인 버튼 */}
        <div>
          <Link to='/login'>
            <Button>로그인 하러가기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
