// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useState } from 'react';
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

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  const handleClickPlace = (placeId) => {
    const place = mockPlaces.find((item) => item.placeId === placeId);
    setSelectedPlace(place);
    setMapCenter(place.lat, place.lng);
    navigate(`/${placeId}`);
  };

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
