import EmptyState from '@/components/ui/EmptyState';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import React from 'react';

export default function NetworkTest() {
  const { isOnline, checkStatus } = useOnlineStatus();

  return (
    <div>
      <div>{isOnline ? <div>온라인입니다</div> : <EmptyState variant="offline" />}</div>
    </div>
  );
}
