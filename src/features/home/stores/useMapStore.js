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

  // 데이터
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

  calculateCenterFromOriginal: () => {
    const { originalPlaces } = get();
    const currentOffset = get().latOffset;

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

    return {
      lat: sum.lng / originalPlaces.length - currentOffset,
      lng: sum.lat / originalPlaces.length,
    };
  },

  // 확대레벨 리셋
  resetSelectedPlace: () => set({ level: 9 }),

  // 하나의 장소를 골랐을 때
  selectPlace: (placeId) => {
    const { originalPlaces } = get();
    const currentOffset = get().latOffset;

    const place = originalPlaces.find((item) => item.placeId === placeId);

    console.log(place.lng, place.lat)

    if (place) {
      set({
        selectedPlace: place,
        mapCenter: { lat: place.lng - currentOffset, lng: place.lat },
        level: 5
      });
    }

    return place
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
    const currentOffset = get().latOffset;
    set({ mapCenter: { lat: lat - currentOffset, lng: lng } });
  },

  resetMapCenter: () => {
    const center = get().calculateCenterFromOriginal();
    set({ mapCenter: center, level: 9 });
  },
}));
