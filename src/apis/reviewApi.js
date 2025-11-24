import api from '@/apis/axiosInstance';

/**
 * 장소 후기 리스트 조회
 * @param {number} placeId - 장소 ID
 * @param {boolean} [onlyMyReview] - 내 후기만 보기 여부
 */
export const getPlaceReviews = async ({ placeId, onlyMyReview = false }) => {
  try {
    const response = await api.get(`/places/${Number(placeId)}/reviews`, {
      params: { onlyMyReview },
    });

    return response.data;
  } catch (error) {
    console.error('후기 조회 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 후기 작성
 * @param {number} placeId - 장소 ID
 * @param {string} content - 후기 내용
 */
export const createReview = async ({ placeId, content }) => {
  try {
    const response = await api.post(`/places/${Number(placeId)}/reviews`, { content });

    return response.data;
  } catch (error) {
    console.error('후기 저장 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 후기 수정
 * @param {number} reviewId - 후기 ID
 * @param {string} content - 수정할 후기 내용
 */
export const updateReview = async ({ reviewId, content }) => {
  try {
    const response = await api.patch(`/reviews/${Number(reviewId)}`, { content });

    return response.data;
  } catch (error) {
    console.error('후기 수정 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 후기 삭제
 * @param {number} reviewId - 후기 ID
 */
export const deleteReview = async ({ reviewId }) => {
  try {
    const response = await api.delete(`/reviews/${Number(reviewId)}`);
    return response.data;
  } catch (error) {
    console.error('후기 삭제 중 오류 발생:', error);
    throw error;
  }
};
