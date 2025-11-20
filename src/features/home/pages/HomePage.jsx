// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { mockPlaces } from '@/mocks/places';
import { useMapStore } from '../stores/useMapStore';

import PlaceList from '@/features/place/components/PlaceList';
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';

import Maps from '../components/Maps';
import BottomSheet from '@/components/ui/BottomSheet';
import ChipGroup from '../components/ChipGroup';
import Chip from '@/components/ui/Chip';
import FloatingChip from '../components/FloatingChip';
import { usePlaceListQuery } from '../hooks/usePlaceListQuery';

export default function HomePage() {
  // 맵 스토어
  const { placeLists } = usePlaceListQuery();

  const { places, setPlaces, setMapCenter, resetMapCenter } = useMapStore();
  const navigate = useNavigate();

  // 선택한 장소
  const [selectedPlace, setSelectedPlace] = useState(null);

  // 바텀 시트 오픈
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  // 관심 장소 보기 / 안보기
  const [handleBookmark, setHandleBookmark] = useState(false);

  // 관심 칩 높이 계산
  const [snapIndex, setSnapIndex] = useState(1);
  const snapPoints = [0, 0.5, 0.85];
  const actualHeights = [0, 40, 80];  // 실제 사용할 높이 (vh 단위)
  
  const bottomSheetHeight = actualHeights[snapIndex];
  const isChipVisible = isBottomSheetOpen && bottomSheetHeight < 70;

  useEffect(() => {
    setPlaces(placeLists)
  }, [placeLists])

  // 리스트에서 장소 하나 클릭
  const handleClickPlace = (placeId) => {
    const place = places.find((item) => item.placeId === placeId);
    setSelectedPlace(place);
    setMapCenter(place.lng, place.lat);
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

      <Maps locations={places} />
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
            <PlaceDetailContent place={selectedPlace} />
          ) : (
            <PlaceList places={places} onClickPlace={handleClickPlace} />
          )}
        </BottomSheet>
      </div>
    </div>
  );
}
