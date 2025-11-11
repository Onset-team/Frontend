import React, { useRef } from 'react';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 아이콘 및 이미지
import IconPenLarge from '@/assets/icons/IconPenLarge.svg';
import ProfilePlaceholder from '@/assets/images/profilePlaceholder.png';

export default function ProfileSection({
  profileImageUrl,
  nickname,
  email,
  onImageEdit,
  onNicknameEdit,
}) {
  const fileInputRef = useRef(null);

  // 파일 선택 열기
  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  // 프로필 이미지 파일 선택
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      {/* 프로필 */}
      <div onClick={handleOpenFile} className='relative cursor-pointer'>
        <div className='bg-stoov-gray-100 h-[120px] w-[120px] overflow-hidden rounded-full'>
          <img
            src={profileImageUrl || ProfilePlaceholder}
            alt='프로필 이미지'
            className='h-full w-full object-cover'
          />
        </div>

        <Button
          variant='icon'
          size='iconLg'
          aria-label='프로필 이미지 수정'
          className='absolute right-0 bottom-0 flex'
        >
          <div className='bg-stoov-white-100 flex h-[30px] w-[30px] items-center justify-center rounded-full'>
            <IconPenLarge className='text-stoov-gray-300' />
          </div>
        </Button>

        <input
          id='profileImage'
          type='file'
          accept='image/*'
          className='hidden'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {/* 닉네임, 이메일 */}
      <div className='flex flex-col items-center gap-1'>
        <div className='flex items-center gap-1'>
          <Typography variant='titleLg'>
            {/* @{nickname} */}
            @Username
          </Typography>

          <Button variant='icon' size='iconSm' onClick={onNicknameEdit} aria-label='닉네임 수정'>
            <IconPenLarge className='text-stoov-gray-300' />
          </Button>
        </div>

        <Typography variant='labelMd2' color='gray200'>
          {/* {email} */}
          Username@gmail.com
        </Typography>
      </div>
    </div>
  );
}
