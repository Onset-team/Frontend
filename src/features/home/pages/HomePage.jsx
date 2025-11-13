// import Button from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React from 'react';
import Maps from '../components/Maps';

export default function HomePage() {
  return (
    <div className='relative h-[calc(100vh-120px)] w-full overflow-hidden'>
      <div className='w-full absolute top-[25px] z-20 px-4'>
        <SearchBar />
      </div>

      <Maps />
    </div>
  );
}
