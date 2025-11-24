import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBookmark, getBookmarks, postBookmark } from '@/apis/bookmarkApi';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * 관심 장소 리스트 조회
 */
export const useBookmarksQuery = () => {
  const { isLoggedIn } = useAuthStore();

  return useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
    enabled: !!isLoggedIn,
    staleTime: 30 * 60 * 1000, // 30분
  });
};

/**
 * 관심 장소 토글
 * - mutate({ placeId, isBookmarked }) 형태로 사용
 *   isBookmarked: true  => 해제
 *                 false => 추가
 */
export const useToggleBookmarkMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ placeId, isBookmarked }) => {
      return isBookmarked
        ? deleteBookmark({ placeId }) // 관심 해제
        : postBookmark({ placeId }); // 관심 저장
    },
    onSuccess: (_, { placeId }) => {
      // 관심 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });

      // 장소 상세 페이지 새로고침
      queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });

      // 장소 리스트 새로고침
      queryClient.invalidateQueries({ queryKey: ['placeList'] });
    },
  });
};
