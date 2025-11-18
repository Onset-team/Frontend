import useKakaoLoader from '@/libs/kakaos/useKakaoLoader';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import mapMarkers from './mapMarkers';
import { useMapStore } from '../stores/useMapStore';

export default function Maps({ locations = [] }) {
  useKakaoLoader();

  // 맵 스토어
  const mapCenter = useMapStore(state => state.mapCenter);
  const setMapCenter = useMapStore(state => state.setMapCenter);

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

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
      <div className='relative my-2 h-[calc(100vh-100px)] w-full overflow-hidden'>
        <Map id='map' center={mapCenter} style={{ width: '100%', height: '100%' }} level={5} onCreate={setMap}>
          {/* 위치 마커 */}
          <MarkerClusterer
            averageCenter={true} // 클러스터 중심을 마커들의 평균 위치로
            minLevel={5} // 최소 확대 레벨 (숫자가 작을수록 더 확대됨)
            styles={clusterStyles} // 클러스터러 스타일
          >
            {locations.map((position, index) => (
              <MapMarker
                key={`${position.lat - position.lng}`}
                position={{ lat: position.lat, lng: position.lng }} // 마커를 표시할 위치
                image={{
                  src: mapMarkers('#4d4d4d', 24, 35), // 마커이미지
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기
                }}
                clickable={true}
                onClick={() => {
                  setSelectedMarker(position.placeId);
                  setMapCenter(position.lat, position.lng);
                }}
              />
            ))}

            {/* {locations.map((position, index) => (
              <MapMarker
                key={`${position.lat - position.lng}`}
                position={{ lat: position.lat + 0.002, lng: position.lng + 0.002 }} // 마커를 표시할 위치
                image={{
                  src: mapMarkers('#ec3910', 24, 35), // 마커이미지
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기
                }}
                clickable={true}
                onClick={() => {
                  setSelectedMarker(index);
                }}
              />
            ))} */}
          </MarkerClusterer>
        </Map>

        {/* 마커 클릭 */}
        {selectedMarker !== null && (
          <div className='absolute top-4 left-4 z-50 bg-white p-4 shadow-lg text-black'>
            <button onClick={() => setSelectedMarker(null)}>닫기</button>
            <pre className='mt-2 text-xs'>
              {JSON.stringify(locations[selectedMarker], null, 2)}
            </pre>
          </div>
        )}

      </div>
    </>
  );
}
