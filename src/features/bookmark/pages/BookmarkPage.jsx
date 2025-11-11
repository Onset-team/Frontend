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
    <>
      <ToTopButton />

      {totalCount > 0 ? (
        <PlaceList places={mockPlaces} totalCount={totalCount} />
      ) : (
        <EmptyState variant='favorite' />
      )}
    </>
  );
}
