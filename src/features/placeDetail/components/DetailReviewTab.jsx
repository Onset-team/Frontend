import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
// 훅
import { useDeleteReviewMutation, useReviewsQuery } from '@/features/review/hooks/useReviews';
// 스토어
import { useAuthStore } from '@/stores/useAuthStore';
// 컴포넌트
import ReviewList from '@/features/review/components/ReviewList';
import ReviewWriteSection from '@/features/review/components/ReviewWriteSection';
import ConfirmModal from '@/components/ui/ConfirmModal';

export default function DetailReviewTab({ place, source }) {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { isLoggedIn } = useAuthStore();

  // 컨펌 모달 타입 'delete' | 'loginWrite' | 'loginReport' || null
  const [modalType, setModalType] = useState(null);
  const [targetReviewId, setTargetReviewId] = useState(null);

  // 리뷰 리스트 쿼리
  const {
    data: reviews = [],
    isLoading,
    isError,
  } = useReviewsQuery({
    placeId: Number(placeId),
    onlyMyReview: false,
  });

  // 리뷰 삭제 뮤테이션
  const deleteMutation = useDeleteReviewMutation(Number(placeId));

  // 후기 작성 클릭 시
  const openWritePage = () => {
    if (!place) return;

    if (isLoggedIn) {
      navigate(`/places/${place.placeId}/reviews/new`, {
        state: { place, from: source },
        replace: true,
      });
    } else {
      setModalType('loginWrite');
    }
  };

  // 후기 수정 클릭 시
  const handleEdit = (review) => {
    if (!review) return;

    navigate(`/places/${place.placeId}/reviews/${review.reviewId}`, {
      state: { place, review, from: source },
      replace: true,
    });
  };

  // 삭제 클릭 컨펌창 열기
  const handleDelete = (reviewId) => {
    setTargetReviewId(reviewId);
    setModalType('delete');
  };

  // 오류 제보 클릭 시
  const handleReport = () => {
    if (isLoggedIn) {
      window.open('https://open.kakao.com/o/pttP9E2h', '_blank', 'noopener,noreferrer');
    } else {
      setModalType('loginReport');
    }
  };

  // 컨펌창 닫기
  const closeModal = () => {
    setModalType(null);
    setTargetReviewId(null);
  };

  // 컨펌 버튼 클릭 시
  const handleConfirm = async () => {
    if (modalType === 'delete') {
      if (!targetReviewId) return;

      const toastId = toast.loading('후기를 삭제 중입니다...');

      try {
        await deleteMutation.mutateAsync({ reviewId: targetReviewId });
        toast('후기가 삭제되었습니다.', { id: toastId });
        closeModal();
      } catch (error) {
        console.error('리뷰 삭제 실패:', error);
        toast.error('후기 삭제에 실패했습니다.', { id: toastId });
      }
    }

    if (modalType === 'loginWrite') {
      closeModal();
      navigate('/login');
    }

    if (modalType === 'loginReport') {
      closeModal();
      navigate('/login');
    }
  };

  const MODAL_CONFIG = {
    delete: {
      title: '후기를 삭제하시겠습니까?',
      desc: '삭제한 후기는 복구할 수 없습니다.',
      leftButtonLabel: '취소',
      rightButtonLabel: '확인',
    },
    loginWrite: {
      title: '로그인 후 이용해 주세요.',
      desc: '로그인하고 장소 후기를 작성해 주세요!',
      leftButtonLabel: '취소',
      rightButtonLabel: '로그인',
    },
    loginReport: {
      title: '로그인 후 이용해 주세요.',
      desc: '로그인하고 오류 제보해 주세요!',
      leftButtonLabel: '취소',
      rightButtonLabel: '로그인',
    },
  };

  const currentConfig = modalType ? MODAL_CONFIG[modalType] : null;

  if (isLoading) {
    return <div>리뷰를 로딩 중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <ReviewWriteSection onClick={openWritePage} />

      <ReviewList
        reviews={reviews}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onReport={handleReport}
        isLoggedIn={isLoggedIn}
      />

      {/* 컨펌창 */}
      {modalType && currentConfig && (
        <ConfirmModal
          isOpen={!!modalType}
          onClose={closeModal}
          title={currentConfig.title}
          desc={currentConfig.desc}
          leftButtonLabel={currentConfig.leftButtonLabel}
          rightButtonLabel={currentConfig.rightButtonLabel}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
