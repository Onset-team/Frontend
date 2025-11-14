import React, { useEffect, useRef, useState } from 'react';
// 유틸
import formatDate from '@/utils/formatDate';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import ReviewMoreMenu from '@/features/review/components/ReviewMoreMenu';
import { cn } from '@/utils/cn';

export default function ReviewItem({ review, onEdit, onDelete, onReport }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isContentClamped, setIsContentClamped] = useState(false);
  const contentRef = useRef(null);

  // 텍스트가 실제로 4줄 이상인지 판단
  useEffect(() => {
    if (contentRef.current) {
      const isClamped = contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsContentClamped(isClamped);
    }
  }, [review.content]);

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className='bg-stoov-gray-800 flex flex-col gap-3 rounded-lg p-3'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <Typography variant='labelSm3' color='gray100'>
            {review.nickname}
          </Typography>
          {review.updatedAt && (
            <>
              <div className='bg-stoov-gray-200 h-2.5 w-px' />
              <Typography variant='labelSm3' color='gray100'>
                {formatDate(review.updatedAt)}
              </Typography>
            </>
          )}

          <div className='bg-stoov-gray-200 h-2.5 w-px' />
          <Typography variant='labelSm3' color='gray100'>
            {formatDate(review.createdAt)}
          </Typography>
        </div>

        <ReviewMoreMenu
          isMyReview={review.isMyReview}
          onEdit={onEdit}
          onDelete={onDelete}
          onReport={onReport}
        />
      </div>

      <div>
        <Typography
          ref={contentRef}
          variant='bodySm2'
          className={cn('text-stoov-white-100 whitespace-pre-line', {
            'line-clamp-4': !isExpanded,
          })}
        >
          {review.content}
        </Typography>

        {isContentClamped && (
          <Typography
            as='button'
            variant='bodySm2'
            type='button'
            onClick={handleToggleExpand}
            className='underline'
          >
            {isExpanded ? '접기' : '더보기'}
          </Typography>
        )}
      </div>
    </div>
  );
}
