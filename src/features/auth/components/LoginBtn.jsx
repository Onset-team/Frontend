import React from 'react';

import Typography from '@/components/ui/Typography';
import GoogleLoginBtn from './GoogleLoginBtn';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function LoginBtn() {
  const clientId = import.meta.env.VITE_GOOGLE_TEST_CLIENT_ID;

  return (
    <div className='w-full flex flex-col items-center justify-center gap-3'>
      {/* 구글 로그인 버튼 */}
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginBtn />
      </GoogleOAuthProvider>

      {/* 로그인 소개문 */}
      <Typography variant='labelSm2' color='gray200'>
        소셜 로그인으로 빠르게 시작해보세요.
      </Typography>
    </div>
  );
}
