import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockReviews } from '@/mocks/reviews';
// 컴포넌트
import ReviewList from '@/features/review/components/ReviewList';
import ReviewWriteSection from '@/features/review/components/ReviewWriteSection';
import ConfirmModal from '@/components/ui/ConfirmModal';

export default function DetailReviewTab() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [targetReviewId, setTargetReviewId] = useState(null);

  // 후기 작성 페이지로 이동
  const goToReviewWrite = () => {
    navigate(`/places/${placeId}/review`);
  };

  // 수정
  const handleEdit = (reviewId) => {
    navigate(`/places/${placeId}/review/${reviewId}`);
  };

  // 삭제
  const handleDelete = (reviewId) => {
    setTargetReviewId(reviewId);
    setIsDeleteModal(true);
  };

  // 컨펌창 삭제 클릭 시 API 호출
  const confirmDelete = async () => {
    console.log('컨펌창 삭제 클릭');
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

  return (
    <>
      <ReviewWriteSection onClick={goToReviewWrite} />

      <ReviewList
        review={mockReviews}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onReport={handleReport}
      />

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
