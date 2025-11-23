import React from 'react';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import BookmarkButton from '@/components/ui/BookmarkButton';
// 이미지
import PlacePlaceholderLarge from '@/assets/images/placePlaceholderLarge.png';

export default function DetailCard({ place, isBookmarked = false, onToggleBookmark, isPending }) {
  if (!place) return null;

  const handleBookmarkClick = () => {
    onToggleBookmark?.(place);
  };

  return (
    <div className='flex flex-col gap-4 p-4'>
      {/* 정보 */}
      <div className='flex items-center justify-between gap-2'>
        <div>
          {/* 장소명 */}
          <Typography as='h3' variant='titleLg' className='line-clamp-2'>
            {place.name}
          </Typography>

          {/* 주소 */}
          <Typography variant='bodySm2' color='gray200' className='mt-1 mb-2 line-clamp-1'>
            {place.address}
          </Typography>

          {/* 장소 태그 */}
          <Typography
            as='div'
            variant='labelSm3'
            className='text-stoov-orange-300 bg-stoov-gray-800 w-fit rounded-full px-2 py-1'
          >
            {place.type}
          </Typography>
        </div>

        <BookmarkButton
          size='large'
          isActive={isBookmarked}
          onToggle={handleBookmarkClick}
          disabled={isPending}
        />
      </div>

      {/* 이미지 */}
      <div className='overflow-hidden rounded-lg'>
        <img
          src={place.thumbnailUrl || PlacePlaceholderLarge}
          alt={place.title}
          crossOrigin='anonymous'
          fetchPriority='high'
          width={100}
          height={100}
          className='h-full w-full object-cover'
          onError={(e) => {
            e.currentTarget.src = PlacePlaceholderLarge;
          }}
        />
      </div>
    </div>
  );
}
