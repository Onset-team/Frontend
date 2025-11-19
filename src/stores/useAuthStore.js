import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      userId: null,
      nickname: null,
      profileImageUrl: null,
      isAuthenticated: false,

      // 로그인
      setUser: (user) => {
        console.log('setUser 호출:', user);
        set({
          userId: user.userId,
          nickname: user.nickname,
          profileImageUrl: user.profileImageUrl,
          isAuthenticated: true,
        });
      },

      // 로그아웃
      logout: () =>
        set({
          userId: null,
          nickname: null,
          profileImageUrl: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        userId: state.userId,
        nickname: state.nickname,
        profileImageUrl: state.profileImageUrl,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);