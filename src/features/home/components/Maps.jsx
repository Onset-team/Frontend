import useKakaoLoader from '@/libs/kakaos/useKakaoLoader';
import React, { useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import mapMarkers from './mapMarkers';

export default function Maps() {
  useKakaoLoader();

  // 지도 중심 좌표
  const [center, setCenter] = useState({
    lat: 37.571648599,
    lng: 126.976372775,
  });

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

    const [dummyLocations, setDummyLocations] = useState([
    { lat: 37.5665, lng: 126.978, address: '서울특별시 중구 세종대로 110' },
    { lat: 37.5511, lng: 126.9882, address: '서울특별시 중구 남산공원길 105' },
    { lat: 37.5796, lng: 126.977, address: '서울특별시 종로구 사직로 161' },
    { lat: 37.5662, lng: 126.9784, address: '서울특별시 중구 태평로1가 31' },
    { lat: 37.5515, lng: 126.9882, address: '서울특별시 용산구 이태원로 54길 60-16' },
    { lat: 37.5793, lng: 126.977, address: '서울특별시 종로구 삼청로 30' },
    { lat: 37.5219, lng: 127.0411, address: '서울특별시 강남구 테헤란로 152' },
    { lat: 37.5172, lng: 127.0473, address: '서울특별시 강남구 봉은사로 524' },
    { lat: 37.4979, lng: 127.0276, address: '서울특별시 서초구 서초대로 396' },
    { lat: 37.5133, lng: 127.1028, address: '서울특별시 송파구 올림픽로 300' },
    { lat: 37.5642, lng: 126.9759, address: '서울특별시 중구 을지로 281' },
    { lat: 37.5547, lng: 126.9707, address: '서울특별시 용산구 한강대로 405' },
    { lat: 37.54, lng: 126.9565, address: '서울특별시 용산구 이촌로 87' },
    { lat: 37.5326, lng: 126.99, address: '서울특별시 용산구 서빙고로 137' },
    { lat: 37.4848, lng: 127.0317, address: '서울특별시 서초구 강남대로 201' },
  ]);

  return (
    <>
      <div className='relative my-2 h-[calc(100vh-100px)] w-full overflow-hidden'>
        <Map
          id='map'
          center={center}
          style={{ width: '100%', height: '100%' }}
          level={5}
        >

          {/* 위치 마커 */}
          <MarkerClusterer
            averageCenter={true} // 클러스터 중심을 마커들의 평균 위치로
            minLevel={5} // 최소 확대 레벨 (숫자가 작을수록 더 확대됨)
            styles={clusterStyles} // 클러스터러 스타일
          >
            {dummyLocations.map((position, index) => (
              <MapMarker
                key={`${position.lat - position.lng}`}
                position={{ lat: position.lat, lng: position.lng }} // 마커를 표시할 위치
                image={{
                  src: mapMarkers('#FF0000', 24, 35), // 마커이미지
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                clickable={true}
                onClick={() => {
                  setIsOpen(true);
                  // console.log(isOpen);
                }}
              />
            ))}

            {dummyLocations.map((position, index) => (
              <MapMarker
                key={`${position.lat - position.lng}`}
                position={{ lat: position.lat + 0.002, lng: position.lng + 0.002 }} // 마커를 표시할 위치
                image={{
                  src: mapMarkers('#0000ff', 24, 35), // 마커이미지
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                clickable={true}
                onClick={() => {
                  setIsOpen(true);
                  // console.log(isOpen);
                }}
              />
            ))}
          </MarkerClusterer>
        </Map>
      </div>
    </>
  );
}
