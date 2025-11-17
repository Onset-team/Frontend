import React, { useState } from 'react';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import ConfirmModal from '@/components/ui/ConfirmModal';

export default function AccountSection({ onAccountDelete, onLogout }) {
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  // 회원탈퇴 클릭
  const openAccountDeleteConfirm = () => {
    console.log('탈퇴 버튼 클릭');
    setIsDeleteConfirmOpen(true);
  };

  // 컨펌창에서 회원탈퇴 클릭
  const confirmAccountDelete = () => {
    console.log('탈퇴 컨펌 실행');
    setIsDeleteConfirmOpen(false);
    onAccountDelete?.();
  };

  // 로그아웃 클릭
  const openLogoutConfirm = () => {
    setIsLogoutConfirmOpen(true);
  };

  // 컨펌창에서 로그아웃 클릭
  const confirmLogout = () => {
    setIsLogoutConfirmOpen(false);
    onLogout?.();
  };

  return (
    <div className='flex items-center gap-4'>
      <Typography onClick={openAccountDeleteConfirm} as='button' variant='labelSm3' color='gray200'>
        회원탈퇴
      </Typography>

      <div className='bg-stoov-gray-200 h-[13px] w-px'></div>

      <Typography onClick={openLogoutConfirm} as='button' variant='labelSm2' color='gray200'>
        로그아웃
      </Typography>

      {isDeleteConfirmOpen && (
        <ConfirmModal
          isOpen={isDeleteConfirmOpen}
          title='정말로 탈퇴하시겠어요?'
          desc={`탈퇴 시 후기는 1년 간 보관 후 삭제되며,\n그 외 모든 정보는 즉시 삭제됩니다.`}
          rightButtonLabel='탈퇴'
          onClose={() => setIsDeleteConfirmOpen(false)}
          onConfirm={confirmAccountDelete}
        />
      )}

      {isLogoutConfirmOpen && (
        <ConfirmModal
          isOpen={isLogoutConfirmOpen}
          title='로그아웃 하시겠어요?'
          desc={`현재 계정에서 로그아웃되며,\n다시 로그인 후 서비스를 이용하실 수 있습니다.`}
          rightButtonLabel='로그아웃'
          onClose={() => setIsLogoutConfirmOpen(false)}
          onConfirm={confirmLogout}
        />
      )}
    </div>
  );
}
