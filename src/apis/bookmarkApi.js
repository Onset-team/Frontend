import api from '@/apis/axiosInstance';

/**
 * 관심 장소 리스트 조회
 */
export const getBookmarks = async () => {
  try {
    const response = await api.get('/bookmarks');

    return response.data;
  } catch (error) {
    console.error('관심 장소 조회 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 관심 장소 추가
 * @param {number} placeId - 장소 ID
 */
export const postBookmark = async ({ placeId }) => {
  try {
    const response = await api.post(`/places/${Number(placeId)}/bookmarks`);

    return response.data;
  } catch (error) {
    console.error('관심 장소 추가 중 오류 발생:', error);
    throw error;
  }
};
/**
 * 관심 장소 해제
 * @param {number} placeId - 장소 ID
 */
export const deleteBookmark = async ({ placeId }) => {
  try {
    const response = await api.delete(`/places/${placeId}/bookmarks`);

    return response.data;
  } catch (error) {
    console.error('관심 장소 해제 중 오류 발생:', error);
    throw error;
  }
};
