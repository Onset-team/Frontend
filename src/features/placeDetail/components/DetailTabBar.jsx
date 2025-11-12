import React, { useState } from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Typography from '@/components/ui/Typography';

export default function DetailTabBar({ activeTab, onClick, tabItem }) {
  return (
    <div aria-label='상세 탭' className='flex h-[45px]'>
      {tabItem.map((tab) => (
        <Typography
          key={tab.id}
          as='button'
          variant='labelMd1'
          align='center'
          active={activeTab === tab.id}
          onClick={() => onClick(tab.id)}
          className={cn(
            'bg-stoov-gray-900 w-full border-b-2',
            activeTab === tab.id ? 'border-stoov-orange-500' : 'border-stoov-gray-900',
          )}
        >
          {tab.label}
        </Typography>
      ))}
    </div>
  );
}
