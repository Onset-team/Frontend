import { create } from 'zustand';

export const useMapStore = create((set, get) => ({
  // 필터, 검색 결과를 저장

  places: [],

  // 전체 목록
  originalPlaces: [],

  // 검색어
  keyword: '',

  mapCenter: {
    lat: 37.571648599,
    lng: 126.976372775,
  },

  // 지도 중앙 오프셋
  latOffset: 0.006,

  // ui

  // 데이터
  initializePlaces: (data) =>
    set({
      originalPlaces: data,
      places: data,
    }),

  // setPlaces: (data) => set({ places: data }),

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
    set({ mapCenter: { lat: 37.571648599, lng: 126.976372775 } });
  },
}));
