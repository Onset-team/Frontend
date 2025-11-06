import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';

export default function LoginPage() {
  const clientId = import.meta.env.VITE_GOOGLE_TEST_CLIENT_ID
  return (
    <div className='flex flex-row items-center justify-center'>
      {' '}
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
