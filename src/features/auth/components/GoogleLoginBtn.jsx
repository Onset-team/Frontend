import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const clientId = import.meta.env.VITE_GOOGLE_TEST_CLIENT_ID;

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  // 윈도우 너비 감지 및 상태 업데이트
  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 500px 미만인 작은 모바일 화면인지 판단
  const isSmallMobile = currentWidth < 500;

  // 너비 계산 로직:
  // 1. 현재 윈도우 너비의 90%를 사용
  // 2. 최대 너비는 400px을 넘지 않도록.
  const buttonWidth = Math.min(currentWidth * 0.9, 400); 

  // 속성 분기
  const buttonSize = isSmallMobile ? 'medium' : 'large'; 
  const buttonText = isSmallMobile ? 'signin_with' : 'continue_with';


  return (
    <div className='flex flex-row items-center justify-center'>
      {' '}
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed');
          }}

        width={buttonWidth} 
        
        size={buttonSize} 
        text={buttonText}
        />
      </GoogleOAuthProvider>
    </div>
  );
}