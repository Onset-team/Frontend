
import React from 'react';
import LoginBtn from '../components/LoginBtn';
import LoginLogo from '../components/LoginLogo';

export default function LoginPage() {

  // 높이 계산은 100vh에서 헤더와 높이를 빼서 계산
  return (
    <div className='flex flex-col h-[calc(100vh-120px)] items-center justify-center gap-16 px-4'>
      {' '}
      {/* 로고 부분 */}
        <LoginLogo />
      {/* 버튼 부분 */}
        <LoginBtn />
    </div>
  );
}
