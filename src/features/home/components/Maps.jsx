import useKakaoLoader from '@/libs/kakaos/useKakaoLoader';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import mapMarkers from './mapMarkers';
import { useMapStore } from '../stores/useMapStore';
import { useHandleClickPlace } from '../hooks/useHandleClickPlace';

export default function Maps({ locations = [] }) {
  useKakaoLoader();

  // 맵 스토어
  const mapCenter = useMapStore((state) => state.mapCenter);
  // const setMapCenter = useMapStore((state) => state.setMapCenter);
  const mapLevel = useMapStore((state) => state.level);

  const handleClickPlace = useHandleClickPlace();

  const [map, setMap] = useState(null);
  // const [selectedMarker, setSelectedMarker] = useState(null);

  // 지도 장소 클릭시, 맵 센터 변경
  useEffect(() => {
    if (!map) return;
    const moveLatLon = new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng);
    map.panTo(moveLatLon);
  }, [map, mapCenter]);

  // 클러스터러 스타일
  const clusterStyles = [
    {
      width: '52px',
      height: '52px',
      background: '#f58369',
      color: '#ffffff',
      textColor: '#ffffff',
      textSize: 14,
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '54px',
      fontWeight: 500,
      outline: '16px solid rgba(245,131,105, 0.4)',
      outlineOffset: '0px',
    },
  ];
  
  return (
    <>
      <div className='relative h-[calc(100vh-118px)] w-full overflow-hidden'>
        <Map
          id='map'
          center={mapCenter}
          style={{ width: '100%', height: '100%' }}
          level={mapLevel}
          onCreate={setMap}
          onZoomChanged={(map) => {
            // 맵 확대 레벨 변경 감지
              const level = map.getLevel();
              useMapStore.getState().setLevel(level);
          }}
        >
          {/* 위치 마커 */}
          <MarkerClusterer
            averageCenter={true} // 클러스터 중심을 마커들의 평균 위치로
            minLevel={5} // 최소 확대 레벨 (숫자가 작을수록 더 확대됨)
            styles={clusterStyles} // 클러스터러 스타일
          >
            {locations.map((position, index) => (
                <MapMarker
                  key={position.placeId}
                  position={{ lat: position.lng, lng: position.lat }}
                  image={{
                    src: mapMarkers(position.bookmarked ? '#ec3910': '#4d4d4d' , 24, 35),
                    size: { width: 24, height: 35 },
                  }}
                  clickable={true}
                  onClick={() => {
                    handleClickPlace(position.placeId)
                  }}
                />
            ))}
          </MarkerClusterer>
        </Map>

        {/* 마커 클릭 */}
        {/* {selectedMarker !== null && (
          <div className='absolute top-4 left-4 z-50 bg-white p-4 text-black shadow-lg'>
            <button onClick={() => setSelectedMarker(null)}>닫기</button>
            <pre className='mt-2 text-xs'>{JSON.stringify(locations[selectedMarker], null, 2)}</pre>
          </div>
        )} */}
      </div>
    </>
  );
}
