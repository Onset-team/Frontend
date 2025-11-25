import { useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/libs/kakaos/useKakaoLoader';

import { useApiCall } from '../hooks/useApiCall';
import { useTestStore } from '../stores/useTestStore';

import mapMarkers from '../components/mapMarkers';
import { mapCircleMarkers } from '../components/mapCircleMarkers';
import { debounce } from 'lodash';

export default function MapTest() {
  useKakaoLoader();

  const { data, setData } = useTestStore();

  const { data: apiData, statusCode, error, isLoading } = useApiCall(1);

  // 다크모드 필터링
  const [darkMode, setDarkMode] = useState(false);

  // 클릭 위치 좌표
  const [result, setResult] = useState('');

  // 클릭 위치 주소
  const [address, setAddress] = useState('');

  // 지도 중심 좌표
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  // 내 현재위치
  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  // 마커 클릭 모달
  const [isOpen, setIsOpen] = useState(false);
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

  // 현재 내 위치, 중심 좌표
  useEffect(() => {
    // 최초 지도 중심 좌표 : 갱신 x
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });

    // 현재 위치 : 이동시 갱신
    navigator.geolocation.watchPosition((pos) => {
      setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  // useEffect(() => {
  //   console.log('현재 저장된 위치들:', dummyLocations);
  // }, [dummyLocations]);

  // api 호출
  useEffect(() => {
    if (error) {
      console.error('API 에러:', error);
      return;
    }

    if (apiData) {
      setData(apiData);
    }
  }, [apiData, error]);

  // useEffect(() => {
  //   console.log(apiData);
  //   console.log(statusCode);
  // }, [apiData, statusCode]);

  // 좌표 -> 주소 변환
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

  // 중심좌표를 내 위치로 조정
  const setCenterToMyPosition = () => {
    setCenter(position);
  };

  // 중심 좌표 이동 감지시, 이동된 좌표로 중심을 이동
  // 감지가 없을 때에만 center 상태를 갱신 -> 마지막 호출만 실행
  // useMemo로 디바운스 정상 작동 시킴
  const updateCenter = useMemo(
    () =>
      debounce((map) => {
        // console.log(map.getCenter());
        setCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }, 500),
    [],
  );

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
      <div className='relative my-2 h-[calc(100vh-100px)] w-full overflow-hidden rounded-xl'>
        <Map
          id='map'
          center={center}
          style={{ width: '100%', height: '100%' }}
          level={3}
          onClick={(_, mouseEvent) => {
            const latlng = mouseEvent.latLng;
            setResult(
              `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`,
            );
            getAddressFromCoords(latlng.getLat(), latlng.getLng());
          }}
          onCenterChanged={updateCenter}
        >
          {/* 내 위치 마커 */}
          <MapMarker
            position={position}
            image={{
              src: mapCircleMarkers('#0066FF', 20),
              size: {
                width: 20,
                height: 20,
              },
            }}
            title='내 위치'
          />

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

        {/* 마커 클릭 */}
        {isOpen && (
          <div className='absolute top-4 left-4 z-50 bg-white p-4 shadow-lg'>
            <img
              alt='close'
              width='14'
              height='13'
              src='https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif'
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: '5px', color: '#000' }}>Hello World!</div>
          </div>
        )}

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

        <div className='absolute top-10 right-3 z-20 flex flex-col gap-2.5 p-2.5'>
          <button
            className='flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_0_8px_#00000025]'
            onClick={setCenterToMyPosition}
          ></button>
        </div>
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
