import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBookmark, getBookmarks, postBookmark } from '@/apis/bookmarkApi';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * 관심 장소 리스트 조회
 */
export const useBookmarksQuery = () => {
  const { userId } = useAuthStore();

  return useQuery({
    queryKey: ['bookmarks', userId],
    queryFn: getBookmarks,
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5분
    select: (data) => data ?? [],
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
      if (isBookmarked) {
        return deleteBookmark({ placeId });
      }
      return postBookmark({ placeId });
    },
    onSuccess: (_, variables) => {
      const { userId } = useAuthStore.getState();

      // 관심 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ['bookmarks', userId] });

      // 장소 상세 페이지 새로고침
      queryClient.invalidateQueries({ queryKey: ['placeDetail', variables.placeId] });

      // 장소 리스트 새로고침
      queryClient.invalidateQueries({ queryKey: ['placeList'] });
    },
  });
};
