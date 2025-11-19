import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockReviews } from '@/mocks/reviews';
import toast from 'react-hot-toast';
import { useDeleteReviewMutation, useReviewsQuery } from '@/features/review/hooks/useReviews';
// 컴포넌트
import ReviewList from '@/features/review/components/ReviewList';
import ReviewWriteSection from '@/features/review/components/ReviewWriteSection';
import ConfirmModal from '@/components/ui/ConfirmModal';

export default function DetailReviewTab({ place }) {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const [reviews, setReviews] = useState(mockReviews);

  // 삭제 컨펌 상태
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [targetReviewId, setTargetReviewId] = useState(null);

  // const {
  //   data: reviews = [],
  //   isLoading,
  //   isError,
  // } = useReviewsQuery({ placeId: placeId, onlyMyReview: false });

  const deleteMutation = useDeleteReviewMutation(placeId);

  // 후기 작성 페이지로 이동
  const openWritePage = () => {
    if (!place) return;
    navigate(`/places/${place.placeId}/reviews/new`, {
      state: { place },
      replace: true,
    });
  };

  // 후기 수정 페이지로 이동
  const handleEdit = (review) => {
    if (!review) return;
    navigate(`/reviews/${review.reviewId}`, {
      state: { place, review },
      replace: true,
    });
  };

  // 삭제 클릭 시 컨펌창 열기
  const handleDelete = (reviewId) => {
    setTargetReviewId(reviewId);
    setIsDeleteModal(true);
  };

  // 컨펌창 닫기
  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setTargetReviewId(null);
  };

  // 오류 제보 클릭 시 오픈 채팅방
  const handleReport = () => {
    window.open('https://www.naver.com', '_blank', 'noopener,noreferrer');
  };

  // 컨펌창 삭제 클릭 시
  const confirmDelete = async () => {
    if (!targetReviewId) return;

    const toastId = toast.loading('후기를 삭제 중입니다...');

    try {
      await deleteMutation.mutateAsync({ reviewId: targetReviewId });
      toast('후기가 삭제되었습니다.', { id: toastId });
      closeDeleteModal();
    } catch (error) {
      console.error('리뷰 삭제 실패:', error);
      toast.error('후기 삭제에 실패했습니다.', { id: toastId });
    }
  };

  // if (isLoading) {
  //   return <div>리뷰를 로딩 중입니다...</div>;
  // }
  // if (isError) {
  //   return <div>오류가 발생했습니다.</div>;
  // }

  return (
    <>
      <ReviewWriteSection onClick={openWritePage} />

      <ReviewList
        reviews={reviews}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onReport={handleReport}
      />

      {/* 삭제 컨펌창 */}
      {isDeleteModal && (
        <ConfirmModal
          isOpen={isDeleteModal}
          onClose={closeDeleteModal}
          title='후기를 삭제하시겠습니까?'
          desc='삭제한 후기는 복구할 수 없습니다.'
          leftButtonLabel='취소'
          rightButtonLabel='삭제'
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
}
