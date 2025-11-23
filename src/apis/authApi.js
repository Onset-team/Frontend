import api from '@/apis/axiosInstance';

/**
 * 내 정보 조회
 */
export const getMyInfo = async () => {
  try {
    const response = await api.get('/users/my');
    return response.data;
  } catch (error) {
    console.error('내 정보 조회 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 프로필 이미지 수정
 * @param {string} profileImageUrl - 수정할 프로필 이미지 URL
 */
export const updateProfileImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.put('/users/my', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('프로필 이미지 수정 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 회원탈퇴
 */
export const deleteMyAccount = async () => {
  try {
    const response = await api.delete('/users', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('회원 탈퇴 중 오류 발생:', error);
    throw error;
  }
};
