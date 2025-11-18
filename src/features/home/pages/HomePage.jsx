// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useEffect, useState } from 'react';
import Maps from '../components/Maps';
import BottomSheet from '@/components/ui/BottomSheet';
import PlaceList from '@/features/place/components/PlaceList';
import { mockPlaces } from '@/mocks/places';
import { useMapStore } from '../stores/useMapStore';
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  // 맵 스토어
  const { setMapCenter, resetMapCenter } = useMapStore();
  const navigate = useNavigate();

  // 선택한 장소
  const [selectedPlace, setSelectedPlace] = useState(null);

  // 바텀 시트 오픈
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

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
      <div className='absolute top-[25px] z-20 w-full px-4'>
        <SearchBar onBack={onBack} />
      </div>

      <Maps locations={mockPlaces} />
      <div>
        <BottomSheet
          open={isBottomSheetOpen}
          onOpenChange={setIsBottomSheetOpen}
          snapPoints={[0, 0.5]}
          initialSnap={1}
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
