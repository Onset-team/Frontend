import React, { useState } from 'react';
// 컴포넌트
import ReviewItem from '@/features/review/components/ReviewItem';
import Checkbox from '@/components/ui/Checkbox';
import EmptyState from '@/components/ui/EmptyState';

export default function ReviewList({ review, onEdit, onDelete, onReport }) {
  const [onlyMyReview, setOnlyMyReview] = useState(false);

  // 내 후기만 토글
  const toggleOnlyMyReview = (e) => {
    setOnlyMyReview(e.target.checked);
  };

  // 내 후기만 필터링
  const filteredReviews = onlyMyReview ? review.filter((item) => item.isMyReview) : review;

  // 최신순으로 정렬 필요
  return (
    <>
      {filteredReviews.length > 0 ? (
        <div className='flex flex-col items-end gap-2'>
          <Checkbox checked={onlyMyReview} handleChange={toggleOnlyMyReview} label='내 후기만' />

          <div className='flex w-full flex-col gap-3'>
            {filteredReviews.map((item) => (
              <ReviewItem
                key={item.reviewId}
                review={item}
                onEdit={onEdit}
                onDelete={onDelete}
                onReport={onReport}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState variant='review' />
      )}
    </>
  );
}
