import React from 'react';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import Typography from '@/components/ui/Typography';
import PlaceList from '@/features/place/components/PlaceList';
import EmptyState from '@/components/ui/EmptyState';

export default function FavoritePage() {
  // 장소 토탈 카운트
  const totalCount = mockPlaces.length || 0;

  return (
    <div>
      <ToTopButton />

      {totalCount > 0 ? (
        <div className='flex flex-col gap-2 pt-4'>
          <Typography variant='labelMd2' color='gray300' align='right' className='px-4 leading-5'>
            총 {totalCount}곳
          </Typography>
          <PlaceList places={mockPlaces} />
        </div>
      ) : (
        <EmptyState variant='favorite' />
      )}
    </div>
  );
}
