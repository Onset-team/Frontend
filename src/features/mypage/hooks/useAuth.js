import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteMyAccount, getMyInfo, updateProfileImage } from '@/apis/authApi';
import { useAuthStore } from '@/stores/useAuthStore';
import toast from 'react-hot-toast';

/**
 * 내 정보 조회
 */
export const useMyInfoQuery = () => {
  const { setUser, isLoggedIn } = useAuthStore();

  return useQuery({
    queryKey: ['myInfo'],
    queryFn: getMyInfo,
    enabled: isLoggedIn, // 로그인 상태에서만 호출
    retry: false,
    staleTime: 5 * 60 * 1000, // 5분
    onSuccess: (data) => {
      setUser({
        nickname: data.nickname,
        profileImageUrl: data.profileImageUrl,
      });
    },
    onError: (error) => {
      console.error('내 정보 조회 실패', error);
    },
  });
};

/**
 * 프로필 이미지 수정
 */
export const useUpdateProfileImageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file) => updateProfileImage(file),

    onSuccess: () => {
      toast('프로필 이미지가 변경되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    },
    onError: () => {
      toast.error('프로필 이미지 변경에 실패했습니다.');
    },
  });
};

/**
 * 회원탈퇴
 */
export const useDeleteMyAccountMutation = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuthStore();

  return useMutation({
    mutationFn: deleteMyAccount,
    onSuccess: () => {
      queryClient.clear();
      logout();
      toast('탈퇴가 완료되었습니다.');
    },
    onError: () => {
      toast.error('탈퇴에 실패했습니다.');
    },
  });
};
