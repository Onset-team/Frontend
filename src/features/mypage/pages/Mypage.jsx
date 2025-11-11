import React from 'react';
// 컴포넌트
import AccountSection from '@/features/mypage/components/AccountSection';
import ProfileSection from '@/features/mypage/components/ProfileSection';

export default function Mypage({ profileImageUrl, nickname, email, version }) {
  // 프로필 이미지 수정
  const onImageEdit = () => {
    console.log('프로필 이미지 수정 클릭');
  };

  // 닉네임 수정
  const onNicknameEdit = () => {
    console.log('닉네임 수정 클릭');
  };

  // 탈퇴하기
  const onAccountDelete = () => {
    console.log('탈퇴하기 클릭');
  };

  return (
    <div className='flex min-h-[calc(100dvh-118px)] flex-col items-center justify-between px-4 pt-8 pb-[74px]'>
      <ProfileSection
        profileImageUrl={profileImageUrl}
        nickname={nickname}
        email={email}
        onImageEdit={onImageEdit}
        onNicknameEdit={onNicknameEdit}
      />

      {/* 탈퇴하기, 버전 */}
      <AccountSection version={version} onAccountDelete={onAccountDelete} />
    </div>
  );
}
