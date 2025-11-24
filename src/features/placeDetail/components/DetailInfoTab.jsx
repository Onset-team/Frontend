import React from 'react';
// 컴포넌트
import Typography from '@/components/ui/Typography';
import PlaceFacilities from '@/features/placeDetail/components/PlaceFacilities';
// 아이콘
import IconLink from '@/assets/icons/IconLink.svg';

export default function DetailInfoTab({ place }) {
  if (!place) return null;

  const infoItem = [
    {
      id: 'time',
      title: '운영 시간',
      label: `${place.operatingTime || ''} (${place.availableDays || ''})`,
    },
    {
      id: 'apply',
      title: '승인 절차',
      label: place.howToApply,
    },
    {
      id: 'reservation',
      title: '예약 사이트',
      label: '자세한 예약 방법은 사이트에서 확인해 보세요.',
      link: place.reservationUrl,
    },
    {
      id: 'contact',
      title: '문의처',
      label: place.contact,
    },
    {
      id: 'notice',
      title: '안내사항',
      label: '자세한 사항은 예약 링크를 통해 확인해 보세요.',
      isFacilitySection: true,
    },
  ];

  return (
    <div className='flex flex-col gap-7'>
      {infoItem.map(({ id, title, label, link, isFacilitySection }) => (
        <div key={id} className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <Typography as='h4' variant='bodyMd'>
              {title}
            </Typography>

            {label && (
              <Typography as='h4' variant='bodySm2' color='gray100'>
                {label}
              </Typography>
            )}
          </div>

          {/* 링크 */}
          {link && (
            <div className='flex items-center gap-1'>
              <IconLink className='text-stoov-gray-100' />
              <a
                href={link}
                alt={place.name}
                target='_blank'
                rel='noopener noreferrer'
                className='text-stoov-orange-100 line-clamp-1 flex-1 break-all'
              >
                {link}
              </a>
            </div>
          )}

          {/* 안내사항 아이콘 */}
          {isFacilitySection && (
            <PlaceFacilities
              electricity={place.electricity}
              peopleLimit={place.peopleLimit}
              isPaid={place.isPaid}
            />
          )}
        </div>
      ))}
    </div>
  );
}
