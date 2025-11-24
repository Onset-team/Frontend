import React from 'react';
import { useParams } from 'react-router-dom';
// 컴포넌트
import PlaceDetailContent from '@/features/placeDetail/components/PlaceDetailContent';
import { usePlaceDetailQuery } from '@/features/placeDetail/hooks/usePlaceDetail';

export default function PlaceDetailPage() {
  const { placeId } = useParams();
  const { data: placeDetail, isLoading, isError } = usePlaceDetailQuery(placeId);

  return <PlaceDetailContent place={placeDetail} isLoading={isLoading} isError={isError} />;
}
