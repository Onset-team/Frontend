import { create } from 'zustand';

export const useHeaderStore = create((set) => ({
  mode: 'logo', // logo | title | back
  title: '',
  setLogo: () => set({ mode: 'logo' }),
  setTitle: (title) => set({ mode: 'title', title }),
  setBack: () => set({ mode: 'back' }),
}));
