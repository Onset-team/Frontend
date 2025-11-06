import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 새로고침시 데이터가 사라짐
export const useTestStore = create((set, get) => ({
  data: [],

  setData: (data) => set({ data: data }),
}));

// 새로고침시 데이터가 사라지지 않음
export const usePersistStore = create(
  persist((set, get) => ({
    data: [],

    setData: (data) => set({ data: data }),
  })),
);
