import React from 'react';
// 컴포넌트
import AccountSection from '@/features/mypage/components/AccountSection';
import ProfileSection from '@/features/mypage/components/ProfileSection';
import AgreeSection from '@/features/mypage/components/AgreeSection';
import EmptyState from '@/components/ui/EmptyState';
import { useNavigate } from 'react-router-dom';

export default function Mypage({ profileImageUrl, nickname, email, version = '1.0.0' }) {
  const navigate = useNavigate();
  const isLoggedIn = false;
  // 프로필 이미지 변경
  const handleProfileImageChange = (file) => {
    console.log('프로필 이미지 변경 파일:', file);
  };

  // 회원 탈퇴
  const handleAccountDelete = () => {
    console.log('회원탈퇴 클릭');
  };

  // 로그아웃
  const handleLogout = () => {
    console.log('로그아웃 클릭');
  };

  // if (!isLoggedIn) {
  //   return (
  //     <EmptyState
  //       variant='login'
  //       buttonLabel='로그인 하러 가기'
  //       onButtonClick={() => navigate('/login')}
  //     />
  //   );
  // }

  return (
    <div className='flex min-h-[calc(100dvh-118px)] flex-col items-center justify-between px-4 pt-4 pb-8'>
      <div className='flex w-full flex-col gap-4'>
        <ProfileSection
          profileImageUrl={profileImageUrl}
          nickname={nickname}
          email={email}
          onProfileImageChange={handleProfileImageChange}
        />

        {/* 동의, 버전 */}
        <AgreeSection version={version} />
      </div>

      {/* 탈퇴하기, 로그아웃 */}
      <AccountSection onAccountDelete={handleAccountDelete} onLogout={handleLogout} />
    </div>
  );
}
