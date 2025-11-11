import React from 'react';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import PlaceCard from '@/features/place/components/PlaceCard';
import Typography from '@/components/ui/Typography';

export default function PlaceList({ totalCount }) {
  return (
    <div className='flex flex-col gap-2 pt-4 pb-16'>
      <Typography variant='labelMd2' color='gray300' align='right' className='px-4 leading-5'>
        총 {totalCount}곳
      </Typography>

      <div className='flex flex-col'>
        {mockPlaces.map((item) => (
          <PlaceCard key={item.id} place={item} />
        ))}
      </div>
    </div>
  );
}
