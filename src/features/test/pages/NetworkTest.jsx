import EmptyState from '@/components/ui/EmptyState';
import { useOnlineStatusStore } from '@/stores/useOnlineStatusStore';
import React from 'react';

export default function NetworkTest() {
  const isOnline = useOnlineStatusStore((state) => state.isOnline);

  return (
    <div>
      <div>{isOnline ? <div>온라인입니다</div> : <EmptyState variant="offline" />}</div>
    </div>
  );
}
