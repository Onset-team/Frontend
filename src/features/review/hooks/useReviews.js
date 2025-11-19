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
    staleTime: 5 * 60 * 1000, // 5분
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
      queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
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
      queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
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
      queryClient.invalidateQueries({ queryKey: ['placeDetail', placeId] });
      queryClient.invalidateQueries({ queryKey: ['placeReviews', placeId] });
    },
  });
};
