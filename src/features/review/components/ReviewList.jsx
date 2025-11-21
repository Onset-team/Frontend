import React, { useState } from 'react';
// 컴포넌트
import ReviewItem from '@/features/review/components/ReviewItem';
import Checkbox from '@/components/ui/Checkbox';
import EmptyState from '@/components/ui/EmptyState';

export default function ReviewList({ reviews = [], onEdit, onDelete, onReport, isLoggedIn }) {
  const [onlyMyReview, setOnlyMyReview] = useState(false);

  const hasReviews = reviews.length > 0; // 리뷰 존재 여부

  // 내 후기만 토글
  const toggleOnlyMyReview = (e) => {
    setOnlyMyReview(e.target.checked);
  };

  // 내 후기만 필터링
  const filteredReviews = onlyMyReview ? reviews.filter((item) => item.isMyReview) : reviews;

  // 최신순으로 정렬 필요
  return (
    <>
      {hasReviews ? (
        <div className='flex flex-col items-end gap-2'>
          {isLoggedIn && (
            <Checkbox checked={onlyMyReview} handleChange={toggleOnlyMyReview} label='내 후기만' />
          )}

          <div className='flex w-full flex-col gap-3'>
            {filteredReviews.length > 0 ? (
              filteredReviews.map((item) => (
                <ReviewItem
                  key={item.reviewId}
                  review={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onReport={onReport}
                />
              ))
            ) : (
              <EmptyState variant='myReview' />
            )}
          </div>
        </div>
      ) : (
        <EmptyState variant='review' />
      )}
    </>
  );
}
