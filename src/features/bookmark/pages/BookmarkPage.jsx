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
  const { isLoggedIn } = useAuthStore();

  // 관심 장소 리스트 조회
  const { data: bookmarks = [], isLoading, isError } = useBookmarksQuery();

  // 장소 클릭
  const handleClickPlace = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  if (!isLoggedIn) {
    return (
      <EmptyState
        variant='login'
        buttonLabel='로그인 하러 가기'
        onButtonClick={() => navigate('/login')}
      />
    );
  }

  // 관심 장소 리스트 조회
  if (isLoading) {
    return <div>관심 장소를 불러오는 중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (
    <>
      <ToTopButton />

      {bookmarks.length > 0 ? (
        <PlaceList places={bookmarks} onClickPlace={handleClickPlace} />
      ) : (
        <EmptyState variant='bookmark' />
      )}
    </>
  );
}
