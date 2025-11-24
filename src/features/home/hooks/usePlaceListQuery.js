import { useQuery } from '@tanstack/react-query';
import { placeListApi } from '../services/placeListApi';

/**
 * 장소 리스트 조회
 */
export const usePlaceListQuery = () => {
  const listQuery = useQuery({
    queryKey: ['placeList'],
    queryFn: () => placeListApi(),
    select: (result) => {
      return {
        success: result.success,
        placesLists: result.success ? result.data : [],
      };
    },
    staleTime: 5 * 60 * 1000, // 5분
  });

  return {
    success: listQuery.data?.success,
    placeLists: listQuery.data?.placesLists,
    refetch: listQuery.refetch,
  };
};
