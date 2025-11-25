import React from 'react';
import { Link } from 'react-router-dom';
// 컴포넌트
import Typography from '@/components/ui/Typography';
// 아이콘
import IconRight from '@/assets/icons/IconRight.svg';

const AGREEMENT_ITEMS = [
  { label: '개인정보 처리방침', to: '/agreement/privacy' },
  { label: '이용약관', to: '/agreement/terms' },
];

export default function AgreeSection({ version = '1.0.0' }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='flex w-full flex-col gap-2'>
        {AGREEMENT_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className='bg-stoov-gray-800 flex items-center justify-between rounded-lg py-1 pl-4'
          >
            <Typography variant='bodySm1'>{item.label}</Typography>

            <div className='flex h-10 w-10 items-center justify-center'>
              <IconRight className='text-stoov-gray-100' aria-hidden='true'/>
            </div>
          </Link>
        ))}
      </div>

      <Typography variant='labelSm3' color='gray300'>
        버전 {version}
      </Typography>
    </div>
  );
}
