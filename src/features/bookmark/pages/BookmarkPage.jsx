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
  const { data: bookmarks = [], isLoading, isError, error, refetch } = useBookmarksQuery();

  // 장소 클릭
  const handleClickPlace = (placeId) => {
    navigate(`/places/${placeId}`);
  };

  // 비로그인
  if (!isLoggedIn) {
    return (
      <EmptyState
        variant='login'
        buttonLabel='로그인 하러 가기'
        onButtonClick={() => navigate('/login')}
      />
    );
  }

  // 로딩
  if (isLoading) {
    return <div>관심 장소를 불러오는 중입니다...</div>;
  }

  // 에러
  if (isError) {
    console.error(error.message);
    const status = error?.status;
    const variant = status == null ? 'offline' : status;

    return <EmptyState variant={variant} onButtonClick={() => refetch()} fullScreen />;
  }

  // 관심 장소 없을 경우
  if (bookmarks.length === 0) {
    return <EmptyState variant='bookmark' />;
  }

  return (
    <>
      <ToTopButton />
      <PlaceList places={bookmarks} onClickPlace={handleClickPlace} />
    </>
  );
}
