import React from 'react';
// 컴포넌트
import PlaceCard from '@/features/place/components/PlaceCard';
import Typography from '@/components/ui/Typography';

export default function PlaceList({ places, totalCount, onClickPlace }) {
  return (
    <div className='flex flex-col gap-2 pt-4 pb-16'>
      <Typography variant='labelMd2' color='gray300' align='right' className='px-4 leading-5'>
        총 {totalCount}곳
      </Typography>

      <div className='flex flex-col'>
        {places.map((item) => (
          <PlaceCard key={item.placeId} place={item} onClick={() => onClickPlace?.(item.placeId)} />
        ))}
      </div>
    </div>
  );
}
