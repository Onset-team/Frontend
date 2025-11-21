import api from '@/apis/axiosInstance';

/**
 * 장소 리스트 조회
 * @param {string} [keyword] - 검색어
 */
export const getPlaceList = ({ keyword }) =>
  api.get('/places', {
    params: { keyword, page },
  });

/**
 * 장소 검색
 * @param {string} keyword - 검색어
 */
export const searchPlaces = (params) => api.get('/places/search', { params });

/**
 * 장소 상세 조회
 * @param {number} placeId - 장소 ID
 */
export const getPlaceDetail = async (placeId) => {
  const res = await api.get(`/places/${Number(placeId)}`);
  return res.data;
};
