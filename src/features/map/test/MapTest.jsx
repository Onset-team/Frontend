import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from './useKakaoLoader';

export default function MapTest() {
  useKakaoLoader();

  const [darkMode, setDarkMode] = useState(false);
  const [result, setResult] = useState('');
  const [address, setAddress] = useState('');
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

  useEffect(() => {
    console.log('현재 저장된 위치들:', dummyLocations);
  }, [dummyLocations]);

  const getAddressFromCoords = (lat, lng) => {
    if (!window.kakao?.maps?.services) {
      console.warn('Kakao Maps 서비스가 로드되지 않았습니다.');
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    const coord = new window.kakao.maps.LatLng(lat, lng);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const detailAddr = result[0].road_address
          ? result[0].road_address.address_name
          : result[0].address.address_name;
        setAddress(detailAddr);

        const newLocation = {
          lat: lat,
          lng: lng,
          address: detailAddr,
        };

        setDummyLocations((prev) => [...prev, newLocation]);
      } else {
        setAddress('주소를 찾을 수 없습니다.');
      }
    });
  };

  return (
    <>
      <div className='relative h-[350px] w-full overflow-hidden rounded-xl'>
        <Map
          id='map'
          center={{ lat:  37.5172, lng: 127.0473 }}
          style={{ width: '100%', height: '100%' }}
          level={3}
          onClick={(_, mouseEvent) => {
            const latlng = mouseEvent.latLng;
            setResult(
              `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`,
            );
            getAddressFromCoords(latlng.getLat(), latlng.getLng());
          }}
        >
          {dummyLocations.map((position, index) => (
            <MapMarker
              key={`${position.lat - position.lng}`}
              position={{ lat: position.lat, lng: position.lng }} // 마커를 표시할 위치
              // image={{
              //   src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
              //   size: {
              //     width: 24,
              //     height: 35,
              //   }, // 마커이미지의 크기입니다
              // }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
          ))}
        </Map>

        {/* 다크모드 오버레이 */}
        {darkMode && (
          <div
            className='pointer-events-none absolute inset-0 z-10'
            style={{
              background: 'rgba(20,20,20,0.3)',
              backdropFilter: 'brightness(0.8) contrast(1.05)',
              mixBlendMode: 'overlay',
            }}
          />
        )}

        {/* 다크모드 토글 버튼 */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className='absolute top-3 right-3 z-20 rounded-lg bg-black/60 px-3 py-1.5 text-sm text-white'
        >
          {darkMode ? '라이트 모드' : '다크 모드'}
        </button>
      </div>
      <p
        id='result'
        className='absolute bottom-3 left-3 z-20 rounded-md bg-white/80 px-2 py-1 text-sm text-black'
      >
        {result} {address}
      </p>
    </>
  );
}
