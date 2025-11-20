import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { usePlaceDetailQuery } from '@/features/placeDetail/hooks/usePlaceDetail';
// 컴포넌트
import DetailCard from '@/features/placeDetail/components/DetailCard';
import DetailTabBar from '@/features/placeDetail/components/DetailTabBar';
import DetailInfoTab from '@/features/placeDetail/components/DetailInfoTab';
import DetailReviewTab from '@/features/placeDetail/components/DetailReviewTab';
import ToTopButton from '@/components/ui/ToTopButton';
import api from '@/apis/axiosInstance';

const TAB_ITEM = [
  { id: 'info', label: '안내' },
  { id: 'review', label: '후기' },
];
export default function PlaceDetailContent({ place }) {
  // export default function PlaceDetailContent() {

  const { placeId } = useParams();
  const location = useLocation();

  const initialTab = location.state?.initialTab ?? 'info';
  const [activeTab, setActiveTab] = useState(initialTab);

  // const { id } = useParams();
  // const { data: place, isLoading, isError } = usePlaceDetailQuery(id);

  // if (isLoading) {
  //   return <div>장소 정보를 로딩 중입니다...</div>;
  // }
  // if (isError) {
  //   return <div>오류가 발생했습니다.</div>;
  // }
  // if (!place) {
  //   return <div>장소를 찾을 수 없습니다.</div>;
  // }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='pb-8'>
      <DetailCard place={place} />

      <DetailTabBar activeTab={activeTab} onClick={handleTabClick} tabItem={TAB_ITEM} />

      <div className='px-4 pt-4 pb-8'>
        {activeTab === 'info' && <DetailInfoTab place={place} />}
        {activeTab === 'review' && <DetailReviewTab place={place} />}
      </div>

      <ToTopButton />
    </div>
  );
}
