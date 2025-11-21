import { getPlaceDetail } from '@/apis/placeApi';
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

    select: (data) => ({
      ...data,
      electricity:
        typeof data.electricityAvailable === 'boolean' ? data.electricityAvailable : null,
      peopleLimit:
        typeof data.maxPerformers === 'string' ? data.maxPerformers !== '제한 없음' : null,
      isPaid: typeof data.fee === 'string' ? data.fee === '유료' : null,
    }),
  });
};
