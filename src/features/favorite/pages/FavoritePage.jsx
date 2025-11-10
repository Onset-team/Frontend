import React from 'react';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import EmptyState from '@/components/ui/EmptyState';

export default function FavoritePage() {
  return (
    <div>
      <ToTopButton />
      <EmptyState variant='favorite' />
    </div>
  );
}
