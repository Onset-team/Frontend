import React from 'react';
import { useNavigate } from 'react-router-dom';
// 스토어
import { useAuthStore } from '@/stores/useAuthStore';
// 쿼리
import { useBookmarksQuery } from '@/features/bookmark/hooks/useBookmarks';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import PlaceList from '@/features/place/components/PlaceList';
import EmptyState from '@/components/ui/EmptyState';

export default function BookmarkPage() {
  const navigate = useNavigate();

  const { userId } = useAuthStore();
  const isLoggedIn = !!userId;

  // 관심 장소 리스트 조회
  const { data: bookmarks, isLoading, isError } = useBookmarksQuery();

  if (!isLoggedIn) {
    return (
      <EmptyState
        variant='login'
        buttonLabel='로그인 하러 가기'
        onButtonClick={() => navigate('/login')}
      />
    );
  }

  if (isLoading) {
    return <div>관심 장소를 불러오는 중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  // 장소 클릭
  const handleClickPlace = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  return (
    <>
      <ToTopButton />

      {places.length > 0 ? (
        <PlaceList places={places} onClickPlace={handleClickPlace} />
      ) : (
        <EmptyState variant='bookmark' />
      )}
    </>
  );
}
