import { useQuery } from '@tanstack/react-query';

/**
 * 장소 상세 정보 조회
 */
export const usePlaceDetailQuery = (placeId) => {
  return useQuery({
    queryKey: ['placeDetail', placeId],
    queryFn: () => getPlaceDetail(placeId),
    enabled: !!placeId,
    staleTime: 5 * 60 * 1000, // 5분
  });
};
