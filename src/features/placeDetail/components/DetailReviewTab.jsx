import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockReviews } from '@/mocks/reviews';
import toast from 'react-hot-toast';
// 컴포넌트
import ReviewList from '@/features/review/components/ReviewList';
import ReviewWriteSection from '@/features/review/components/ReviewWriteSection';
import ConfirmModal from '@/components/ui/ConfirmModal';
import ReviewWriteModal from '@/features/review/components/ReviewWriteModal';

export default function DetailReviewTab({ place }) {
  // const navigate = useNavigate();
  // const { placeId } = useParams();
  const [reviews, setReviews] = useState(mockReviews);

  // 수정 모달 상태
  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  // 삭제 컨펌 상태
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [targetReviewId, setTargetReviewId] = useState(null);

  // 후기 작성 모달 열기
  const openWriteModal = () => {
    setEditingReview(null);
    setIsWriteOpen(true);
  };

  // 후기 작성 모달 닫기
  const closeWriteModal = () => {
    setIsWriteOpen(false);
    setEditingReview(null);
  };

  // 수정
  const handleEdit = (review) => {
    setEditingReview(review);
    setIsWriteOpen(true);
  };

  // 삭제
  const handleDelete = (reviewId) => {
    setTargetReviewId(reviewId);
    setIsDeleteModal(true);
  };

  // 컨펌창 삭제 클릭 시 API 호출
  const confirmDelete = async () => {
    console.log('컨펌창 삭제 클릭');
    setReviews((prev) => prev.filter((r) => r.reviewId !== targetReviewId));
    toast('후기가 삭제되었습니다.');

    setIsDeleteModal(false);
    setTargetReviewId(null);
  };

  // 컨펌창 닫기
  const closeDeleteModal = () => {
    console.log('컨펌창 취소 클릭');
    setIsDeleteModal(false);
    setTargetReviewId(null);
  };

  // 오류 제보
  const handleReport = () => {
    window.open('https://www.naver.com', '_blank', 'noopener,noreferrer');
  };

  // 후기 등록, 수정 완료시
  const handleSubmitReview = (reviewData, { mode }) => {
    console.log('리뷰 저장/수정', mode, reviewData);
    // 후기 등록
    if (mode === 'create') {
      toast('후기가 등록되었습니다.');
    }

    // 후기 수정
    if (mode === 'edit') {
      toast('후기가 수정되었습니다.');
    }
  };

  return (
    <>
      <ReviewWriteSection onClick={openWriteModal} />

      <ReviewList
        review={reviews}
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

      {/* 후기 작성 모달 */}
      {isWriteOpen && (
        <ReviewWriteModal
          isOpen={isWriteOpen}
          onClose={closeWriteModal}
          place={place}
          review={editingReview}
          onSubmit={handleSubmitReview}
        />
      )}
    </>
  );
}
