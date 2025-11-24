// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

// 훅
import { usePlaceSearchQuery } from '../hooks/usePlaceSearchQuery';
import { useHandleClickPlace } from '../hooks/useHandleClickPlace';
import { usePlaceListQuery } from '../hooks/usePlaceListQuery';
import { usePlaceDetailQuery } from '@/features/placeDetail/hooks/usePlaceDetail';
import { useBookmarkPlaceQuery } from '../hooks/useBookmarkPlaceQuery';

export default function HomePage() {
  const navigate = useNavigate();
  const { placeId } = useParams();

  // 장소 상세
  const { data: placeDetail, isLoading, isError } = usePlaceDetailQuery(placeId);

  const { placeLists, refetch } = usePlaceListQuery();
  // 맵 스토어
  const {
    places,
    resetSelectedPlace,
    initializePlaces,
    setPlaces,
    resetOriginalPlaces,
    keyword,
    setKeyword,
    resetMapCenter,
    isBottomSheetOpen,
    setIsBottomSheetOpen,
  } = useMapStore();

  // 관심 쿼리
  const { refetch: bookmarkRefetch } = useBookmarkPlaceQuery();

  // 검색 쿼리
  const { mutate } = usePlaceSearchQuery();

  // 컨펌 상태
  const [isLoginConfirmOpen, setIsLoginConfirmOpen] = useState(false);

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
  const handleClickPlace = useHandleClickPlace();

  // 검색 창 뒤로가기 버튼
  const onBack = () => {
    resetSelectedPlace(null);
    resetMapCenter();
    setKeyword('');
    resetOriginalPlaces();
    navigate('/');
  };

  // 컨펌창에서 로그인 클릭 시
  const confirmLogin = () => {
    setIsLoginConfirmOpen(false);
    navigate('/login');
  };

  // 검색어 입력
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // 검색 버튼 클릭
  const handleSearch = () => {
    mutate({ keyword });
  };

  // 관심 장소 토글
  const handleBookmarkState = async () => {
    setIsBottomSheetOpen(false);

    if (handleBookmark) {
      resetOriginalPlaces();
    } else {
      const { data } = await bookmarkRefetch();

      if (data && data.success) {
        setPlaces(data.bookmarkPlaceLists);
      }
    }

    setHandleBookmark(!handleBookmark);
    setIsBottomSheetOpen(true);
  };

  return (
    <div className='relative h-[calc(100vh-118px)] w-full overflow-hidden'>
      <div className='absolute top-2 z-20 flex w-full flex-col gap-2 px-4'>
        <SearchBar
          value={keyword}
          onBack={onBack}
          onChange={handleChange}
          onSearch={handleSearch}
        />

        <ChipGroup />
      </div>

      <Maps locations={places} />
      <div>
        <FloatingChip bottomSheetHeight={bottomSheetHeight} visible={isChipVisible}>
          <Chip
            variant='bookmark'
            direction='vertical'
            selected={handleBookmark}
            onChange={() => handleBookmarkState()}
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
            // <pre>{JSON.stringify(places, null, 2)}</pre>
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
