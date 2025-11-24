import { useQuery } from '@tanstack/react-query';
import { getBookmarks } from '@/apis/bookmarkApi';

/**
 * 관심 장소 조회
 */
export const useBookmarkPlaceQuery = () => {
  const bookmarkPlaceQuery = useQuery({
    queryKey: ['bookmarkPlace'],
    queryFn: () => getBookmarks(),
    select: (result) => {

      return {
        success: result.success,
        bookmarkPlaceLists: result.success ? result.data : [],
      };
    },
    enabled: false,
    staleTime: 5 * 60 * 1000, // 5분
  });

  return {
    success: bookmarkPlaceQuery.data?.success,
    bookmarkPlaceLists: bookmarkPlaceQuery.data?.bookmarkPlaceLists,
    refetch: bookmarkPlaceQuery.refetch,
  };
};
