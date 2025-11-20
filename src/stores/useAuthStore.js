import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      // userId: null,
      nickname: null,
      profileImageUrl: null,

      // 로그인
      setUser: (user) =>
        set({
          // userId: user.userId,
          nickname: user.nickname,
          profileImageUrl: user.profileImageUrl,
        }),

      // 로그아웃
      logout: () =>
        set({
          userId: null,
          nickname: null,
          profileImageUrl: null,
        }),
    }),

    // 로컬스토리지에 저장
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({
        // userId: state.userId,
        nickname: state.nickname,
        profileImageUrl: state.profileImageUrl,
      }),
    },
  ),
);
