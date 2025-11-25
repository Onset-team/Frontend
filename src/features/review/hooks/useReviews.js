import { createReview, deleteReview, getPlaceReviews, updateReview } from '@/apis/reviewApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

/**
 * 후기 리스트 조회
 * @param {number} placeId
 * @param {boolean} onlyMyReview
 */
export const useReviewsQuery = ({ placeId, onlyMyReview }) => {
  return useQuery({
    queryKey: ['placeReviews', placeId, onlyMyReview],
    queryFn: () => getPlaceReviews({ placeId, onlyMyReview }),
    enabled: !!placeId,
    staleTime: 0,

    select: (list) => {
      // 정렬 기준: 등록일(수정일 있으면 수정일로)
      const sortedList = [...list].sort((a, b) => {
        const aBase = a.updatedAt ?? a.createdAt;
        const bBase = b.updatedAt ?? b.createdAt;
        const aTime = new Date(aBase).getTime();
        const bTime = new Date(bBase).getTime();

        return bTime - aTime; // 최신순
      });

      return sortedList;
    },
  });
};

/**
 * 후기 작성
 * @param {number} placeId
 */
export const useCreateReviewMutation = (placeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content }) => createReview({ placeId, content }),

    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
    },
    onError: (error) => {
      console.error('후기 작성 실패', error);
    },
  });
};

/**
 * 후기 수정
 * @param {number} placeId
 */
export const useUpdateReviewMutation = (placeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, content }) => updateReview({ reviewId, content }),

    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
    },
    onError: (error) => {
      console.error('후기 수정 실패', error);
    },
  });
};

/**
 * 후기 삭제
 * @param {number} placeId
 */
export const useDeleteReviewMutation = (placeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId }) => deleteReview({ reviewId }),

    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
    },
    onError: (error) => {
      console.error('후기 삭제 실패', error);
    },
  });
};
