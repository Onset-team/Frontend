import React from 'react';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import PlaceCard from '@/features/place/components/PlaceCard';

export default function PlaceList() {
  return (
    <div className='flex flex-col'>
      {mockPlaces.map((item) => (
        <PlaceCard key={item.id} place={item} />
      ))}
    </div>
  );
}
