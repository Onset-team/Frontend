import EmptyState from '@/components/ui/EmptyState';
import React, { useState } from 'react';

export default function HttpTest() {
  const [currentError, setCurrentError] = useState(null);
  
  const testError = async (statusCode) => {
    const response = await fetch(`/api/error/${statusCode}`);
    console.log('Status:', response.status);
    
    if (!response.ok) {
      setCurrentError(response.status);
    }
  };
  
  // 에러가 있으면 에러 컴포넌트 렌더링
  if (currentError) {
    return <EmptyState variant={currentError} />;
  }

  return (
    <div className='flex flex-col gap-3'>
      <h1>에러 테스트 (콘솔 확인)</h1>
      <button onClick={() => testError(400)}>400 테스트</button>
      <button onClick={() => testError(401)}>401 테스트</button>
      <button onClick={() => testError(403)}>403 테스트</button>
      <button onClick={() => testError(404)}>404 테스트</button>
      <button onClick={() => testError(500)}>500 테스트</button>
    </div>
  );
}
