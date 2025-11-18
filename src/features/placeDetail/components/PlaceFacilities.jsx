import React from 'react';
// 컴포넌트
import Typography from '@/components/ui/Typography';
// 아이콘
import IconElectric from '@/assets/icons/IconElectric.svg';
import IconNonElectric from '@/assets/icons/IconNonElectric.svg';
import IconPeople from '@/assets/icons/IconPeople.svg';
import IconNonPeople from '@/assets/icons/IconNonPeople.svg';
import IconFree from '@/assets/icons/IconFree.svg';
import IconPay from '@/assets/icons/IconPay.svg';

export default function PlaceFacilities({ electricity = null, peopleLimit = null, isPaid = null }) {
  const facilities = [
    {
      key: 'electricity',
      value: electricity,
      iconOn: <IconElectric />,
      iconOff: <IconNonElectric />,
      labelOn: '전기 사용 가능',
      labelOff: '전기 사용 불가',
    },
    {
      key: 'peopleLimit',
      value: peopleLimit,
      iconOn: <IconPeople />,
      iconOff: <IconNonPeople />,
      labelOn: '인원 제한 있음',
      labelOff: '인원 제한 없음',
    },
    {
      key: 'paid',
      value: isPaid,
      iconOn: <IconPay />,
      iconOff: <IconFree />,
      labelOn: '유료 이용',
      labelOff: '무료 이용',
    },
  ];

  return (
    <div className='flex flex-col gap-3'>
      {facilities.map((item) => {
        if (item.value === null) return null;

        const isEnabled = item.value === true;

        return (
          <div key={item.key} className='flex items-center gap-3'>
            <div className='bg-stoov-gray-800 flex h-10 w-10 items-center justify-center rounded-lg'>
              {isEnabled ? item.iconOn : item.iconOff}
            </div>

            <Typography variant='labelMd2'>{isEnabled ? item.labelOn : item.labelOff}</Typography>
          </div>
        );
      })}
    </div>
  );
}
