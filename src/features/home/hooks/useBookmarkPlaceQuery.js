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
        bookmarkPlaceLists: result ? result : [],
      };
    },
    enabled: false,
    staleTime: 5 * 60 * 1000, // 5분
  });


  return {
    bookmarkPlaceLists: bookmarkPlaceQuery.data?.bookmarkPlaceLists,
    refetch: bookmarkPlaceQuery.refetch,
    isFetching: bookmarkPlaceQuery.isFetching,
  };
};
