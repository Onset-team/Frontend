import { useMutation, useQuery } from '@tanstack/react-query';
import { agreementApi } from '../services/agreementApi';
import { useNavigate } from 'react-router-dom';

/**
 * 약관 동의 
 */

export function useAgreementQuery() {
  const navigate = useNavigate(); // 페이지 이동

  const mutation = useMutation({
    mutationFn: agreementApi,

    onSuccess: (result) => {
      navigate('/', { replace: true });
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });

  return mutation;
}


// export const useAgreementQuery = () => {
//   const agreement = useQuery({
//     queryKey: ['placeList'],
//     queryFn: () => agreementApi(),
//     select: (result) => {
//       return {
//         success: result.success,
//         placesLists: result.success ? result.data : [],
//       };
//     },
//     staleTime: 5 * 60 * 1000, // 5분
//   });

//   return {
//     success: listQuery.data?.success,
//     placeLists: listQuery.data?.placesLists,
//   };
// };
