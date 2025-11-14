import React from 'react';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import PlaceList from '@/features/place/components/PlaceList';
import EmptyState from '@/components/ui/EmptyState';
import { useNavigate } from 'react-router-dom';

export default function BookmarkPage() {
  const navigate = useNavigate();
  const totalCount = mockPlaces.length || 0; // 장소 토탈 카운트

  // 장소 클릭
  const handleClickPlace = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  return (
    <>
      <ToTopButton />

      {totalCount > 0 ? (
        <PlaceList places={mockPlaces} totalCount={totalCount} onClickPlace={handleClickPlace} />
      ) : (
        <EmptyState variant='bookmark' />
      )}
    </>
  );
}
