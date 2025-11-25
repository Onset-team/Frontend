import { create } from 'zustand';

export const useMapStore = create((set, get) => ({
  // 필터, 검색 결과를 저장

  places: [],

  // 전체 목록
  originalPlaces: [],

  selectedPlace: null,

  // 검색어
  keyword: '',

  mapCenter: {
    lat: 37.571648599,
    lng: 126.976372775,
  },

  // 맵 확대 레벨
  level: 9,

  // 지도 중앙 오프셋
  latOffset: 0.006,

  // ui
  isBottomSheetOpen: true,

  // ui 변경

  // 바텀 시트 오픈
  setIsBottomSheetOpen: (statue) => set({ isBottomSheetOpen: statue }),

  // 데이터

  // 전체 리스트
  initializePlaces: (data) => {
    set({
      originalPlaces: data,
      places: data,
      level: 9,
    });

    // 중심 계산 및 설정
    const center = get().calculateCenterFromOriginal();
    set({ mapCenter: center });
  },

  // 레벨 별 오프셋
  calculateOffset: (level) => {
    const offsetMap = {
      1: 0,  // 최대 확대
      2: 0,
      3: 0.0015,
      4: 0.003,
      5: 0.004,
      6: 0.006,
      7: 0.01,
      8: 0.02,
      9: 0.04,
      10: 0.06,
      11: 0.08,
      12: 0.1,
      13: 0.15,
      14: 0.2,   // 최대 축소
    };
    
    return offsetMap[level];
  },

  // 중심부 계산
  calculateCenterFromOriginal: () => {
    const { originalPlaces, level, calculateOffset } = get();

    if (!originalPlaces || originalPlaces.length === 0) {
      return { lat: 37.5665, lng: 126.978 };
    }

    const sum = originalPlaces.reduce(
      (acc, place) => ({
        lat: acc.lat + place.lat,
        lng: acc.lng + place.lng,
      }),
      { lat: 0, lng: 0 },
    );

    const offset = calculateOffset(level);  

    return {
      lat: sum.lng / originalPlaces.length - offset,
      lng: sum.lat / originalPlaces.length,
    };
  },

  // 데이터 설정
  setPlaces: (data) => {
    set({
      places: data,
    });
  },

  // 확대레벨 저장
  setLevel: (newLevel) => set({ level: newLevel }),

  // 확대레벨 리셋
  resetMapLevel: () => set({ level: 9 }),

  // 하나의 장소를 골랐을 때
  selectPlace: (placeId) => {
    const { originalPlaces, calculateOffset, level: currentLevel  } = get();

    const place = originalPlaces.find((item) => item.placeId === placeId);

    // console.log(placeId, place.lng, place.lat)

    if (place) {
      const newLevel = 3;
      const offset = calculateOffset(newLevel);

      set({
        selectedPlace: place,
        mapCenter: { lat: place.lng - offset, lng: place.lat },
        level: newLevel,
      });
    }

    return place;
  },

  // 장소 선택 리셋
  resetSelectedPlace: () => set({ selectedPlace: null }),

  // 칩 버튼 필터링
  filterPlaces: (selectedValue) => {
    const { originalPlaces } = get();

    if (selectedValue) {
      // 필터링
      const filteredData = originalPlaces.filter((place) => {
        return place.type === selectedValue;
      });

      set({ places: filteredData });
    } else {
      // 복원
      set({ places: originalPlaces });
    }
  },

  // 검색어 세팅
  setKeyword: (keyword) => set({ keyword }),

  // 검색 결과
  setPlaceSearch: (data) =>
    set({
      places: data,
    }),

  // 전체 목록으로 리셋
  resetOriginalPlaces: () => {
    const { originalPlaces } = get();

    set({ places: originalPlaces });
  },

  setMapCenter: (lat, lng) => {
    const { level, calculateOffset } = get();
    const offset = calculateOffset(level);

    set({ mapCenter: { lat: lat - offset, lng: lng } });
  },

  resetMapCenter: () => {
    const center = get().calculateCenterFromOriginal();
    set({ mapCenter: center, level: 9 });
  },
}));
