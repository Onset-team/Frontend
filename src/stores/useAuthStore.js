import { create } from 'zustand'

export const useAuthStore = create((set) => {
  userId: null,
  nickname: null,
  profileImageUrl: null
  
  // 로그인
  setUser: (user) =>
    set({
      userId:user.userId,
      nickname: user.nickname,
      profileImageUrl: user.profileImageUrl,
    }),

  // 로그아웃 
  logout: () =>
    set({
      userId: null,
      nickname: null,
      profileImageUrl: null
    }),

   // 로컬스토리지에 Uid와 로그인상태 저장
    {
      name: 'auth-storage', // localstorage key
      partialize: (state) => ({
        userId: state.userId, //Uid
        isAuthenticated: state.isAuthenticated, //로그인 상태
      }),
    },
})
