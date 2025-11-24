import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// 훅
import {
  useDeleteMyAccountMutation,
  useMyInfoQuery,
  useUpdateProfileImageMutation,
} from '@/features/mypage/hooks/useAuth';
// 스토어
import { useAuthStore } from '@/stores/useAuthStore';
// 컴포넌트
import AccountSection from '@/features/mypage/components/AccountSection';
import ProfileSection from '@/features/mypage/components/ProfileSection';
import AgreeSection from '@/features/mypage/components/AgreeSection';
import EmptyState from '@/components/ui/EmptyState';

export default function Mypage({ version = '1.0.0' }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoggedIn, logout } = useAuthStore();

  const { data: myInfo, isLoading, isError, error, refetch } = useMyInfoQuery();

  const updateProfileImageMutation = useUpdateProfileImageMutation();
  const deleteMyAccountMutation = useDeleteMyAccountMutation();

  // 프로필 이미지 변경
  const handleProfileImageChange = (file) => {
    if (!file) return;
    updateProfileImageMutation.mutate(file);
  };

  // 회원 탈퇴
  const handleAccountDelete = () => {
    deleteMyAccountMutation.mutate();
  };

  // 로그아웃
  const handleLogout = () => {
    queryClient.clear(); // 쿼리 캐시 비우기
    logout(); // 스토어 초기화
    toast('로그아웃 되었습니다.');
  };

  // 비로그인
  if (!isLoggedIn) {
    return (
      <EmptyState
        variant='login'
        buttonLabel='로그인 하러 가기'
        onButtonClick={() => navigate('/login')}
      />
    );
  }

  // 로딩
  if (isLoading) {
    return <div>마이페이지를 불러오는 중입니다...</div>;
  }

  // 에러
  if (isError) {
    console.error(error.message);
    const status = error?.status;
    const variant = status == null ? 'offline' : status;

    return <EmptyState variant={variant} onButtonClick={() => refetch()} fullScreen />;
  }

  const { profileImageUrl, nickname, email } = myInfo;

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
