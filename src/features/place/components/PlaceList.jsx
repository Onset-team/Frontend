import React from 'react';
import toast from 'react-hot-toast';
// 스토어
import { useAuthStore } from '@/stores/useAuthStore';
// 훅
import { useToggleBookmarkMutation } from '@/features/bookmark/hooks/useBookmarks';
// 컴포넌트
import PlaceCard from '@/features/place/components/PlaceCard';
import Typography from '@/components/ui/Typography';

export default function PlaceList({ places = [], onClickPlace, setIsLoginConfirmOpen }) {
  const { isLoggedIn } = useAuthStore();
  // 관심 토글
  const { mutateAsync: toggleBookmark, isPending } = useToggleBookmarkMutation();

  // 관심 토클
  const handleToggleBookmark = async (place) => {
    if (!isLoggedIn) {
      setIsLoginConfirmOpen(true);
      return;
    }

    const isBookmarked = place.bookmarked;

    try {
      await toggleBookmark({
        placeId: place.placeId ?? place.id,
        isBookmarked: place.bookmarked,
      });

      if (isBookmarked) {
        toast('관심 장소가 해제되었습니다.');
      }
    } catch (error) {
      console.error('관심 장소 등록/해제 실패:', error);
      toast.error(
        isBookmarked ? '관심 장소 해제에 실패했습니다.' : '관심 장소 등록에 실패했습니다.',
      );
    }
  };

  return (
    <div className='flex flex-col gap-2 pt-4 pb-8'>
      <Typography variant='labelMd2' color='gray300' align='right' className='px-4 leading-5'>
        총 {places.length}곳
      </Typography>

      <div className='flex flex-col'>
        {places.map((item) => (
          <PlaceCard
            key={item.placeId}
            place={item}
            onClick={() => onClickPlace?.(item.placeId)}
            isBookmarked={item.bookmarked}
            onToggleBookmark={() => handleToggleBookmark(item)}
            isPending={isPending}
          />
        ))}
      </div>
    </div>
  );
}
