// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { mockPlaces } from '@/mocks/places';
import { useMapStore } from '../stores/useMapStore';

import PlaceList from '@/features/place/components/PlaceList';
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';

import Maps from '../components/Maps';
import BottomSheet from '@/components/ui/BottomSheet';
import ChipGroup from '../components/ChipGroup';
import Chip from '@/components/ui/Chip';
import FloatingChip from '../components/FloatingChip';

export default function HomePage() {
  // 맵 스토어
  const { setMapCenter, resetMapCenter } = useMapStore();
  const navigate = useNavigate();

  // 선택한 장소
  const [selectedPlace, setSelectedPlace] = useState(null);

  // 바텀 시트 오픈
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  // 관심 장소 보기 / 안보기
  const [handleBookmark, setHandleBookmark] = useState(true);

  // 관심 칩 높이 계산
  const [snapIndex, setSnapIndex] = useState(1);
  const snapPoints = [0, 0.5, 0.85];
  const bottomSheetHeight = snapPoints[snapIndex] * 100;
  const isChipVisible = isBottomSheetOpen && bottomSheetHeight < 85; 

  // 리스트에서 장소 하나 클릭
  const handleClickPlace = (placeId) => {
    const place = mockPlaces.find((item) => item.placeId === placeId);
    setSelectedPlace(place);
    setMapCenter(place.lat, place.lng);
    navigate(`/${placeId}`);
  };

  // 검색 창 뒤로가기 버튼
  const onBack = () => {
    setSelectedPlace(null);
    resetMapCenter();
    navigate(`/`);
  };

  return (
    <div className='relative h-[calc(100vh-120px)] w-full overflow-hidden'>
      <div className='absolute top-[25px] z-20 flex w-full flex-col gap-4 px-4'>
        <SearchBar onBack={onBack} />

        <ChipGroup />
      </div>

      <Maps locations={mockPlaces} />
      <div>
        <FloatingChip
          bottomSheetHeight={bottomSheetHeight} 
          visible={isChipVisible}
        >
          <Chip
            variant='bookmark'
            direction='vertical'
            selected={handleBookmark}
            onChange={() => setHandleBookmark(!handleBookmark)}
          />
        </FloatingChip>

        <BottomSheet
          open={isBottomSheetOpen}
          onOpenChange={setIsBottomSheetOpen}
          snapPoints={snapPoints}
          initialSnap={1}
          onSnapChange={setSnapIndex}
        >
          {selectedPlace ? (
            <PlaceDetailContent />
          ) : (
            <PlaceList places={mockPlaces} onClickPlace={handleClickPlace} />
          )}
        </BottomSheet>
      </div>
    </div>
  );
}
