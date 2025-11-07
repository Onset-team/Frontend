import { create } from 'zustand';

// 온라인 상태 체크 함수
const checkOnlineStatus = async () => {
  try {
    // 1px 파일 호출
    const online = await fetch('/NetworkCheck1px.png', {
      method: 'HEAD', // 헤더만 확인
      cache: 'no-cache', // 캐시 무시
      signal: AbortSignal.timeout(5000), // 5초 타임아웃
    });
    return online.ok;
  } catch (err) { // 200~209가 아니면 오프라인이라고 판단
    return false;
  }
};

// 온라인 상태 확인 스토어
export const useOnlineStatusStore = create((set) => ({
  isOnline: true, // 현재 온라인 상태
  setIsOnline: (status) => set({ isOnline: status }), // 온라인 상태 설정
  checkStatus: async () => {
    // 온라인 상태 체크
    const status = await checkOnlineStatus();
    set({ isOnline: status });
  },

  initialize: () => {
    const store = useOnlineStatusStore.getState();

    // 초기 체크
    store.checkStatus();

    // 이벤트 리스너
    const handleOnline = () => store.setIsOnline(true);
    const handleOffline = () => store.setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 주기적 체크, 30초
    const interval = setInterval(() => {
      store.checkStatus();
    }, 30000);

    // cleanup 함수 반환 -> 메모리 누수 방지
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  },
}));
