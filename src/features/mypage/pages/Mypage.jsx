import React from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 아이콘
import IconPenLarge from '@/assets/icons/IconPenLarge.svg';

export default function Mypage() {
  // 프로필 이미지 수정
  const handleProfileImageEdit = () => {
    console.log('프로필 이미지 수정 클릭');
  };

  // 프로필 이미지 선택 시
  const handleProfileImageChange = (e) => {};

  // 닉네임 수정
  const handleNicknameEdit = () => {
    console.log('닉네임 수정 클릭');
  };

  // 탈퇴하기
  const handleAccountDelete = () => {
    console.log('탈퇴하기 클릭');
  };

  return (
    <div className='flex min-h-[calc(100vh-118px)] flex-col items-center justify-between px-4 py-10'>
      <div className='flex flex-col items-center gap-4'>
        {/* 프로필 */}
        <div onClick={handleProfileImageEdit} className='relative cursor-pointer'>
          <div className='bg-stoov-gray-100 h-[120px] w-[120px] overflow-hidden rounded-full'></div>

          <Button variant='icon' size='iconLg' className='absolute right-0 bottom-0'>
            <div className='bg-stoov-white-100 flex h-[30px] w-[30px] items-center justify-center rounded-full shadow-[1px_1px_3px_0px_rgba(0,0,0,0.15)]'>
              <IconPenLarge className='text-stoov-gray-300' />
            </div>
          </Button>

          <input
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleProfileImageChange}
          />
        </div>

        {/* 닉네임, 이메일 */}
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center gap-1'>
            <Typography variant='titleLg'>@Username</Typography>

            <Button onClick={handleNicknameEdit} variant='icon' size='iconSm'>
              <IconPenLarge className='text-stoov-gray-300' />
            </Button>
          </div>

          <Typography variant='labelMd2' color='gray200'>
            Username@gmail.com
          </Typography>
        </div>
      </div>

      {/* 탈퇴하기, 버전 */}
      <div className='flex flex-col items-center gap-2'>
        <Typography
          onClick={handleAccountDelete}
          as='button'
          variant='labelSm2'
          color='gray200'
          className='underline'
        >
          탈퇴하기
        </Typography>

        <Typography variant='labelSm3' color='gray300'>
          버전 1.0.0
        </Typography>
      </div>
    </div>
  );
}
