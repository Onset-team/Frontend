import { create } from "zustand";

export const useMapStore = create((set, get) => ({
  data: [],
  mapCenter: {
    lat: 37.571648599,
    lng: 126.976372775,
  },

  // 지도 중앙 오프셋
  latOffset: 0.006, 

  // ui

  // 데이터
  setData: (data) => set({ data: data }),
  setMapCenter: (lat, lng) => {
    const currentOffset = get().latOffset; 
    set({ mapCenter: { lat: lat - currentOffset, lng: lng } });
  },

  resetMapCenter: () => {
    set({ mapCenter: { lat: 37.571648599, lng: 126.976372775 } });
  }

}));