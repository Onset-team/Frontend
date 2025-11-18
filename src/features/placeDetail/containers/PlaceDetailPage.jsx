import React from 'react';
import { useParams } from 'react-router-dom';
import { mockPlaces } from '@/mocks/places';
// 컴포넌트
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';

export default function PlaceDetailPage() {
  const { placeId } = useParams();
  const place = mockPlaces.find((p) => p.placeId === Number(placeId));

  return <PlaceDetailContent place={place} />;
}

// import React from 'react';
// // 컴포넌트
// import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';
// export default function PlaceDetailPage() {
//   return <PlaceDetailContent />;
// }
