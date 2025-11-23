import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
// 스토어
import { useAuthStore } from '@/stores/useAuthStore';
// 훅
import { usePlaceDetailQuery } from '@/features/placeDetail/hooks/usePlaceDetail';
import { useToggleBookmarkMutation } from '@/features/bookmark/hooks/useBookmarks';
// 컴포넌트
import DetailCard from '@/features/placeDetail/components/DetailCard';
import DetailTabBar from '@/features/placeDetail/components/DetailTabBar';
import DetailInfoTab from '@/features/placeDetail/components/DetailInfoTab';
import DetailReviewTab from '@/features/placeDetail/components/DetailReviewTab';
import ToTopButton from '@/components/ui/ToTopButton';

const TAB_ITEM = [
  { id: 'info', label: '안내' },
  { id: 'review', label: '후기' },
];

export default function PlaceDetailContent({ setIsLoginConfirmOpen }) {
  const location = useLocation();
  const { placeId } = useParams();
  const { isLoggedIn } = useAuthStore();

  const pathname = location.pathname;
  const isBookmarkDetail = pathname.startsWith('/places/');
  const detailSource = isBookmarkDetail ? 'bookmark' : 'home';

  // 장소 상세 쿼리
  const { data: place, isLoading, isError } = usePlaceDetailQuery(Number(placeId));

  // 관심 토글
  const { mutateAsync: toggleBookmark, isPending } = useToggleBookmarkMutation();

  const initialTab = location.state?.initialTab ?? 'info';
  const [activeTab, setActiveTab] = useState(initialTab);

  // 탭 클릭 시
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // 관심 토클
  const handleToggleBookmark = async (place) => {
    if (!isLoggedIn) {
      setIsLoginConfirmOpen(true);
      return;
    }

    const bookmarked = place.bookmarked;

    try {
      await toggleBookmark({
        placeId: place.placeId ?? place.id,
        isBookmarked: place.bookmarked,
      });

      if (bookmarked) {
        toast('관심 장소가 해제되었습니다.');
      }
    } catch (error) {
      console.error('관심 장소 등록/해제 실패:', error);
      toast.error(bookmarked ? '관심 장소 해제에 실패했습니다.' : '관심 장소 등록에 실패했습니다.');
    }
  };

  if (isLoading) {
    return <div>장소 정보를 로딩 중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }
  if (!place) {
    return <div>장소를 찾을 수 없습니다.</div>;
  }

  return (
    <div className='pb-8'>
      <DetailCard
        place={place}
        isBookmarked={place.bookmarked}
        onToggleBookmark={handleToggleBookmark}
        isPending={isPending}
      />

      <DetailTabBar activeTab={activeTab} onClick={handleTabClick} tabItem={TAB_ITEM} />

      <div className='px-4 pt-4 pb-8'>
        {activeTab === 'info' && <DetailInfoTab place={place} />}
        {activeTab === 'review' && <DetailReviewTab place={place} source={detailSource} />}
      </div>

      <ToTopButton />
    </div>
  );
}
