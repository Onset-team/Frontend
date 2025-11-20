import { useMutation, useQuery } from '@tanstack/react-query';
import { authApi } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

export function useAuthCall() {
  const navigate = useNavigate(); // 페이지 이동
  const setUser = useAuthStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: authApi,

    onSuccess: (result) => {
      // 사용자 정보 저장
      setUser(result.data?.data)

      // 신규/기존 유저 분기 및 뒤로 가기 무효화
      if (result.data?.data?.isNewUser) {
        navigate('/agreement', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });

  return mutation;
}

// export function useAuthCall(id) {
//   const apiQuery = useQuery({
//     queryKey: [id],
//     queryFn: () => authApi(),
//     select: (result) => {

//       return {
//         user: result.success ? result.data : [],
//         statusCode: result.statusCode, // http코드
//         error: result.error,
//         isError: !result.success,
//       };
//     },
//     staleTime: 1000 * 60 * 10, // 10분
//     cacheTime: 1000 * 60 * 30, // 30분
//     retry: 1,
//     enabled: false,
//   });

//   return apiQuery;

//   // return {
//   //   // 데이터
//   //   data: apiQuery.data?.data,
//   //   statusCode: apiQuery.data?.statusCode, // http코드
//   //   error: apiQuery.data?.error,
//   //   isLoading: apiQuery.isLoading,
//   //   isError: apiQuery.data?.isError,
//   // };
// }
