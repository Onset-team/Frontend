import api from '@/apis/axiosInstance';

/**
 * 내 정보 조회
 */
export const getMyInfo = async () => {
  const response = await api.get('users/my');
  return response.data;
};

/**
 * 프로필 이미지 수정
 * @param {string} profileImageUrl - 수정할 프로필 이미지 URL
 */
export const updateProfileImage = async ({ profileImageUrl }) => {
  const response = await api.put('users/my', { profileImageUrl });
  return response.data;
};

/**
 * 회원탈퇴
 */
export const deleteMyAccount = async () => {
  const response = await api.delete('users');
  return response.data;
};
