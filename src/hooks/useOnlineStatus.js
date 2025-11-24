import { useOnlineStatusStore } from "@/stores/useOnlineStatusStore";

// 네트워크 상태 체크 훅 
export function useOnlineStatus() {
  const isOnline = useOnlineStatusStore((state) => state.isOnline);
  const checkStatus = useOnlineStatusStore((state) => state.checkStatus);
  
  return { isOnline, checkStatus };
}