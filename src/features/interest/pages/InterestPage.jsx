import React from 'react';
// 컴포넌트
import ToTopButton from '@/components/ui/ToTopButton';
import EmptyState from '@/components/ui/EmptyState';

export default function InterestPage() {
  return (
    <div>
      <ToTopButton />
      <EmptyState variant='interest' buttonText='다시 시도하기' />
    </div>
  );
}
