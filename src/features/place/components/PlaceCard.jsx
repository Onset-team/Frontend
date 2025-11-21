import React from 'react';
// 컴포넌트
import BookmarkButton from '@/components/ui/BookmarkButton';
import Typography from '@/components/ui/Typography';
// 이미지
import PlacePlaceholderSmall from '@/assets/images/placePlaceholderSmall.png';

export default function PlaceCard({
  place = {},
  onClick,
  showBookmarkButton = true,
  showReviewCount = true,
  isBookmarked = false,
  onToggleBookmark,
  isPending,
}) {
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    onToggleBookmark?.();
  };
  return (
    <div
      onClick={onClick}
      className='border-stoov-gray-600 flex cursor-pointer items-center gap-4 border-b px-4 py-5'
    >
      {/* 이미지 */}
      <div className='relative'>
        <div className='h-[100px] w-[100px] overflow-hidden rounded-sm'>
          <img
            src={place.thumbnailUrl || PlacePlaceholderSmall}
            alt={place.title}
            crossOrigin='anonymous'
            loading='lazy'
            fetchpriority='high'
            width={100}
            height={100}
            className='h-full w-full object-cover'
            onError={(e) => {
              e.currentTarget.src = PlacePlaceholderSmall;
            }}
          />
        </div>
        {showBookmarkButton && (
          <BookmarkButton
            isActive={isBookmarked}
            onToggle={handleBookmarkClick}
            disabled={isPending}
            className='absolute right-0 bottom-0'
          />
        )}
      </div>

      {/* 정보 */}
      <div className='flex flex-1 flex-col gap-1'>
        {/* 장소명 */}
        <Typography as='h3' variant='titleSm' className='line-clamp-1'>
          {place.name}
        </Typography>

        {/* 주소 */}
        <Typography variant='bodySm2' color='gray200' className='line-clamp-1'>
          {place.address}
        </Typography>

        {/* 장소 타입 */}
        <Typography
          as='div'
          variant='labelSm3'
          className='text-stoov-orange-300 bg-stoov-gray-800 mt-1 w-fit rounded-full px-2 py-1'
        >
          {place.type}
        </Typography>

        {/* 후기 */}
        {showReviewCount && (
          <Typography variant='labelSm3' color='gray100' align='right'>
            후기 {place.reviewCount}개
          </Typography>
        )}
      </div>
    </div>
  );
}
