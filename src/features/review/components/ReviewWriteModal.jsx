import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// 컴포넌트
import Modal from '@/components/ui/Modal';
import Textarea from '@/components/ui/Textarea';
import PlaceCard from '@/features/place/components/PlaceCard';
import ConfirmModal from '@/components/ui/ConfirmModal';

export default function ReviewWriteModal({ isOpen, onClose, place, review, onSubmit }) {
  const isEdit = !!review;
  const [content, setContent] = useState(review?.content ?? '');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setContent(review?.content ?? '');
    }
  }, [isOpen, review]);

  const isSubmitDisabled = content.trim().length === 0; // textarea 값 없으면 버튼 disabled

  // x 버튼 클릭
  const handleCloseClick = () => {
    if (!content.trim()) {
      onClose();
      return;
    }
    // 작성한 내용 있으면 컨펌창
    setIsConfirmOpen(true);
  };

  // 컨펌창 확인 버튼
  const handleConfirmExit = () => {
    setIsConfirmOpen(false);

    onClose();
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
  const handleSubmit = () => {
    const trimmed = content.trim();
    if (!trimmed) return;

    if (isEdit && review.content === trimmed) {
      toast('변경된 내용이 없습니다.');
      onClose();
      return;
    }

    const payload = {
      ...(review ?? {}), // 수정일 때는 유지
      placeId: place?.id,
      content: trimmed,
    };

    if (onSubmit) {
      onSubmit(payload, { mode: isEdit ? 'edit' : 'create' });
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseClick}
        btnLabel={isEdit ? '후기 수정하기' : '후기 작성하기'}
        btnDisabled={isSubmitDisabled}
        onBtnClick={handleSubmit}
      >
        <div className='flex flex-col'>
          <PlaceCard showBookmarkButton={false} showReviewCount={false} place={place} />

          <div className='px-4 pt-4'>
            <Textarea
              value={content}
              onChange={handleChange}
              placeholder={`해당 장소에 대한 경험을 나눠주세요.
                        (분위기, 유동 인구, 주변 환경 등)`}
            />
          </div>
        </div>
      </Modal>

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
