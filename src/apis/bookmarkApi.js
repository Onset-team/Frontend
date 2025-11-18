import api from '@/apis/axiosInstance';

/**
 * 관심 장소 리스트 조회
 */
export const getBookmarks = () => api.get('/bookmarks');

/**
 * 관심 장소 추가
 * @param {number} placeId - 장소 ID
 */
export const postBookmark = ({ placeId }) => api.post(`/places/${placeId}/bookmarks`);

/**
 * 관심 장소 해제
 * @param {number} placeId - 장소 ID
 */
export const deleteBookmark = ({ placeId }) => api.delete(`/places/${placeId}/bookmarks`);
