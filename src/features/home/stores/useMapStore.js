export const useMapStore = create((set, get) => ({
  data: [],

  setData: (data) => set({ data: data }),
}));