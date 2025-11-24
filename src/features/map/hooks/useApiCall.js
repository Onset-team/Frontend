import { useQuery } from '@tanstack/react-query';
import { testApiCall } from '../services/testApi';

export function useApiCall(id) {
  const apiQuery = useQuery({
    queryKey: [id],
    queryFn: () => testApiCall(),
    select: (result) => {
      console.log(result)
      return {
        data: result.success ? result.data : [], 
        statusCode: result.statusCode, // http코드
        error: result.error,
        isError: !result.success,
      };
    },
    staleTime: 1000 * 60 * 10, // 10분
    cacheTime: 1000 * 60 * 30, // 30분
    retry: 1,
    enabled: !!id,
  });

  return {
    // 데이터
    data: apiQuery.data?.data,
    statusCode: apiQuery.data?.statusCode, // http코드
    error: apiQuery.data?.error,
    isLoading: apiQuery.isLoading,
    isError: apiQuery.data?.isError,
  };
}
