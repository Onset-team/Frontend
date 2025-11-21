// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePlaceListQuery } from '../hooks/usePlaceListQuery';
import { usePlaceDetailQuery } from '@/features/placeDetail/hooks/usePlaceDetail';

// import { mockPlaces } from '@/mocks/places';
import { useMapStore } from '../stores/useMapStore';

// 컴포넌트
import PlaceList from '@/features/place/components/PlaceList';
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';
import ConfirmModal from '@/components/ui/ConfirmModal';
import Maps from '../components/Maps';
import BottomSheet from '@/components/ui/BottomSheet';
import ChipGroup from '../components/ChipGroup';
import Chip from '@/components/ui/Chip';
import FloatingChip from '../components/FloatingChip';

export default function HomePage() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  // 장소 상세
  const { data: placeDetail, isLoading, isError } = usePlaceDetailQuery(placeId);

  const { placeLists } = usePlaceListQuery();
  // 맵 스토어
  const { places, initializePlaces, setMapCenter, resetMapCenter } = useMapStore();

  // 컨펌 상태
  const [isLoginConfirmOpen, setIsLoginConfirmOpen] = useState(false);

  // 선택한 장소
  // const [selectedPlace, setSelectedPlace] = useState(null);

  // 바텀 시트 오픈
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

  // 관심 장소 보기 / 안보기
  const [handleBookmark, setHandleBookmark] = useState(false);

  // 관심 칩 높이 계산
  const [snapIndex, setSnapIndex] = useState(1);
  const snapPoints = [0, 0.5, 1];
  const actualHeights = [0, 40, 80]; // 실제 사용할 높이 (vh 단위)

  const bottomSheetHeight = actualHeights[snapIndex];
  const isChipVisible = isBottomSheetOpen && bottomSheetHeight < 70;

  useEffect(() => {
    initializePlaces(placeLists);
  }, [placeLists]);

  // 리스트에서 장소 하나 클릭
  const handleClickPlace = (placeId) => {
    const place = places.find((item) => item.placeId === placeId);
    // setSelectedPlace(place);
    setMapCenter(place.lng, place.lat);
    navigate(`/${placeId}`);
  };

  // 검색 창 뒤로가기 버튼
  const onBack = () => {
    // setSelectedPlace(null);
    resetMapCenter();
    navigate(`/`);
  };

  // 컨펌창에서 로그인 클릭 시
  const confirmLogin = () => {
    setIsLoginConfirmOpen(false);
    navigate('/login');
  };

  return (
    <div className='relative h-[calc(100vh-118px)] w-full overflow-hidden'>
      <div className='absolute top-2 z-20 flex w-full flex-col gap-2 px-4'>
        <SearchBar onBack={onBack} />

        <ChipGroup />
      </div>

      <Maps locations={places} />
      <div>
        <FloatingChip bottomSheetHeight={bottomSheetHeight} visible={isChipVisible}>
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
          {placeId ? (
            <PlaceDetailContent place={placeDetail} setIsLoginConfirmOpen={setIsLoginConfirmOpen} />
          ) : (
            <PlaceList
              places={places}
              onClickPlace={handleClickPlace}
              setIsLoginConfirmOpen={setIsLoginConfirmOpen}
            />
          )}
        </BottomSheet>
      </div>

      {isLoginConfirmOpen && (
        <ConfirmModal
          isOpen={isLoginConfirmOpen}
          title='로그인 후 이용해 주세요.'
          desc={`로그인하고 관심 장소를 저장해 보세요!`}
          rightButtonLabel='로그인'
          onClose={() => setIsLoginConfirmOpen(false)}
          onConfirm={confirmLogin}
        />
      )}
    </div>
  );
}
