import React, { useState } from 'react';
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
export default function PlaceDetailContent({ place }) {
  const [activeTab, setActiveTab] = useState('info');

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

      <ToTopButton isBottombar={false} />
    </div>
  );
}
