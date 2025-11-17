import React, { useRef } from 'react';
import toast from 'react-hot-toast';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 아이콘 및 이미지
import IconPenLarge from '@/assets/icons/IconPenLarge.svg';
import ProfilePlaceholder from '@/assets/images/profilePlaceholder.png';

export default function ProfileSection({ profileImageUrl, nickname, email, onProfileImageChange }) {
  const fileInputRef = useRef(null);

  // 파일 선택 열기
  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  // 프로필 이미지 파일 선택
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 이미지 허용 타입
    const imageTypes = ['image/jpg', 'image/jpeg', 'image/png'];

    if (!imageTypes.includes(file.type)) {
      toast('jpg, jpeg, png 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    // 이미지 사이즈
    if (file.size > 5 * 1024 * 1024) {
      toast('5MB 이하의 이미지만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    onProfileImageChange?.(file);
  };

  return (
    <div className='flex flex-col items-center gap-4 py-4'>
      {/* 프로필 */}
      <div onClick={handleOpenFile} className='relative cursor-pointer'>
        <div className='bg-stoov-gray-100 h-[100px] w-[100px] overflow-hidden rounded-full'>
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
          className='absolute -right-2 bottom-0 flex'
        >
          <div className='bg-stoov-white-100 flex h-[30px] w-[30px] items-center justify-center rounded-full'>
            <IconPenLarge aria-hidden='true' className='text-stoov-gray-300' />
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
        <Typography variant='titleLg'>
          {/* {nickname} */}
          Username
        </Typography>

        <Typography variant='labelMd2' color='gray200'>
          {/* {email} */}
          Username@gmail.com
        </Typography>
      </div>
    </div>
  );
}
