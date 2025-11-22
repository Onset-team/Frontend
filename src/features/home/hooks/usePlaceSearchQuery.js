import { useMutation, useQuery } from '@tanstack/react-query';
import { placeSearchApi } from '../services/placeSearchApi';
import { useMapStore } from '../stores/useMapStore';

/**
 * 장소 검색
 */

export const usePlaceSearchQuery = () => {
  const setPlaceSearch = useMapStore((state) => state.setPlaceSearch);

  const mutation = useMutation({
    mutationFn: (keyword) => placeSearchApi(keyword),

    onSuccess: (result) => {
      // 성공 여부 판단

      if (result.success) {
        setPlaceSearch(result?.data?.content); 
      } else {
        setPlaceSearch([]); 
      }
    },


    onError: (error) => {
      console.error('검색 실패:', error);
    },
  });

  return mutation;
};




// export const usePlaceSearchQuery = (keyword) => {
//   const searchQuery = useQuery({
//     queryKey: ['search', keyword],
//     queryFn: () => placeSearchApi(keyword),
//     enabled: !!keyword,
//     select: (result) => {
//       return {
//         success: result.success,
//         searchLists: result.success ? result.data : [],
//       };
//     },
//     staleTime: 5 * 60 * 1000, // 5분
//   });

//   return {
//     success: searchQuery.data?.success,
//     searchLists: searchQuery.data?.searchLists,
//   };
// };
