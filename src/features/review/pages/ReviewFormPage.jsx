import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  useCreateReviewMutation,
  useUpdateReviewMutation,
} from '@/features/review/hooks/useReviews';
// 컴포넌트
import Textarea from '@/components/ui/Textarea';
import PlaceCard from '@/features/place/components/PlaceCard';
import ConfirmModal from '@/components/ui/ConfirmModal';
import Button from '@/components/ui/Button';
// 아이콘
import IconLeft from '@/assets/icons/IconLeft.svg';

export default function ReviewFormPage() {
  const navigate = useNavigate();
  const { placeId, reviewId } = useParams();
  const location = useLocation();

  const place = location.state?.place ?? null;
  const review = location.state?.review ?? null;

  const isEdit = Boolean(reviewId);

  const [content, setContent] = useState(review?.content ?? '');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const createMutation = useCreateReviewMutation(placeId);
  const updateMutation = useUpdateReviewMutation(placeId);

  // 수정 모드일 때, review가 바뀌면 내용 다시 세팅
  useEffect(() => {
    setContent(review?.content ?? '');
  }, [review]);

  const isSubmitDisabled =
    content.trim().length === 0 || createMutation.isPending || updateMutation.isPending; // textarea 값 없으면 버튼 disabled

  // 후기 탭 유지
  const goBackToReviewTab = () => {
    // place가 있으면 그걸 우선 사용, 없으면 URL에서 placeId 사용
    const targetPlaceId = place?.placeId ?? place?.id ?? placeId;

    if (!targetPlaceId) {
      navigate(-1);
      return;
    }

    navigate(`/places/${targetPlaceId}`, {
      state: { initialTab: 'review' },
      replace: true,
    });
  };

  const handleGoBack = () => {
    setIsConfirmOpen(true);
  };

  // 컨펌창 확인 버튼
  const handleConfirmExit = () => {
    setIsConfirmOpen(false);
    goBackToReviewTab();
  };

  // 컨펌창 취소 버튼
  const handleCancelExit = () => {
    setIsConfirmOpen(false);
  };

  // textarea
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // 후기 등록, 수정 버튼
  const handleSubmit = async () => {
    const trimmed = content.trim();
    if (!trimmed) return;

    // 수정 모드인데 내용이 안 바뀐 경우
    if (isEdit && review?.content === trimmed) {
      toast('변경된 내용이 없습니다.');
      goBackToReviewTab();
      return;
    }

    const toastId = toast.loading(isEdit ? '후기를 수정 중입니다...' : '후기를 등록 중입니다...');

    try {
      if (isEdit) {
        // 수정
        const targetReviewId = review?.reviewId ?? (reviewId ? Number(reviewId) : null);

        await updateMutation.mutateAsync({
          reviewId: targetReviewId,
          content: trimmed,
        });

        toast('후기가 수정되었습니다.', { id: toastId });
      } else {
        // 작성
        await createMutation.mutateAsync({
          content: trimmed,
        });

        toast('후기가 등록되었습니다.', { id: toastId });
      }

      goBackToReviewTab();
    } catch (error) {
      console.error('후기 작성/수정 실패:', error);

      toast.error(isEdit ? '후기 수정에 실패했습니다.' : '후기 등록에 실패했습니다.', {
        id: toastId,
      });
    }
  };

  return (
    <>
      <div className='bg-stoov-gray-900 fixed top-0 left-1/2 z-50 flex h-15 w-full max-w-[500px] -translate-x-1/2 items-center px-5'>
        <Button variant='icon' size='iconLg' onClick={handleGoBack}>
          <IconLeft className='text-stoov-gray-100' />
        </Button>
      </div>

      <PlaceCard showBookmarkButton={false} showReviewCount={false} place={place} />

      <div className='flex min-h-[calc(100dvh-233px)] flex-col justify-between px-4 pt-4'>
        <Textarea
          value={content}
          onChange={handleChange}
          placeholder={`해당 장소에 대한 경험을 나눠주세요.
                        (분위기, 유동 인구, 주변 환경 등)`}
        />

        <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
          {isEdit ? '후기 수정하기' : '후기 작성하기'}
        </Button>
      </div>

      {/* 나가기 컨펌 모달 */}
      {isConfirmOpen && (
        <ConfirmModal
          isOpen={isConfirmOpen}
          onClose={handleCancelExit}
          title={isEdit ? '후기 수정을 취소하시겠습니까?' : '후기 작성을 취소하시겠습니까?'}
          desc={isEdit ? '수정한 내용이 사라집니다.' : '작성한 내용이 사라집니다.'}
          leftButtonLabel='취소'
          rightButtonLabel='확인'
          onConfirm={handleConfirmExit}
        />
      )}
    </>
  );
}
