import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import PlaceList from '@/features/place/components/PlaceList';
import EmptyState from '@/components/ui/EmptyState';

export default function BookmarkPage() {
  const navigate = useNavigate();
  // const isLoggedIn = false;
  const totalCount = mockPlaces.length || 0; // 장소 토탈 카운트

  // 장소 클릭
  const handleClickPlace = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  // if (!isLoggedIn) {
  //   return (
  //     <EmptyState
  //       variant='login'
  //       buttonLabel='로그인 하러 가기'
  //       onButtonClick={() => navigate('/login')}
  //     />
  //   );
  // }

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
