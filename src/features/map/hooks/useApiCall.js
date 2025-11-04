import { useQuery } from '@tanstack/react-query';
import { testApiCall } from '../services/testApi';

export function useApiCall(id) {
  const apiQuery = useQuery({
    queryKey: [id],
    queryFn: () => testApiCall(),
    select: (result) => {
      if (!result.success) {
        throw new Error(result.error); // 에러 메시지를 담은 에러 생성
      }

      return result.data;
    },
    staleTime: 1000 * 60 * 10, // 10분
    cacheTime: 1000 * 60 * 30, // 30분
    retry: 1,
    enabled: !!id,
  });

  return {
    // 데이터
    data: apiQuery.data,
    error: apiQuery.error?.message,
    isLoading: apiQuery.isLoading,
    isError: apiQuery.isError,
  };
}
