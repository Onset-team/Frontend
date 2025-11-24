import React from 'react';
// 유틸
import { cn } from '@/utils/cn';
// 컴포넌트
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
// 이미지
import EmptyBookmark from '@/assets/images/EmptyBookmark.png';
import EmptySearch from '@/assets/images/EmptySearch.png';
import EmptyReview from '@/assets/images/EmptyReview.png';
import ErrorLogin from '@/assets/images/ErrorLogin.png';
import ErrorClient from '@/assets/images/ErrorClient.png';
import ErrorServer from '@/assets/images/ErrorServer.png';
import ErrorNetwork from '@/assets/images/ErrorNetwork.png?inline';
import PlacePlaceholderSmall from '@/assets/images/placePlaceholderSmall.png';

export default function EmptyState({
  variant, // 'favorite' | 'search' | 'review' | 'login' | 400 | 500 | 'offline'
  buttonLabel = '다시 시도하기',
  onButtonClick,
  fullScreen = false,
}) {
  const variants = {
    bookmark: {
      image: EmptyBookmark,
      title: '아직 관심 장소가 없습니다.',
      desc: `지도를 둘러보고 마음에 드는\n장소에 하트를 눌러보세요.`,
      showButton: false,
      minHeight: 'min-h-[calc(100dvh-118px)]',
    },
    search: {
      image: EmptySearch,
      title: '검색 결과가 없습니다.',
      desc: '다시 한번 검색해보세요!',
      showButton: false,
      minHeight: 'min-h-[calc(100dvh-118px)]',
    },
    review: {
      image: EmptyReview,
      title: '아직 후기가 없어요!',
      desc: '여러분의 생생한 공연 후기를 기다릴게요.',
      showButton: false,
      minHeight: 'min-h-[270px]',
    },
    myReview: {
      image: EmptyReview,
      title: '아직 작성한 후기가 없어요.',
      showButton: false,
      minHeight: 'min-h-[270px]',
    },
    login: {
      image: ErrorLogin,
      title: '로그인 후 이용해 주세요.',
      desc: 'STOOV의 다양한 서비스를 사용할 수 있어요.',
      showButton: true,
      minHeight: 'min-h-[calc(100dvh-118px)]',
    },
    400: {
      image: ErrorClient,
      title: '앗, 잠시 오류가 생겼어요!',
      desc: '잠시 후 다시 시도해주세요!',
      showButton: true,
      minHeight: 'min-h-dvh',
    },
    500: {
      image: ErrorServer,
      title: `요청을 처리하는데\n일시적으로 오류가 생겼어요.`,
      desc: '다시 시도해볼까요?',
      showButton: true,
      minHeight: 'min-h-dvh',
    },
    offline: {
      image: ErrorNetwork,
      title: '인터넷 연결이 원활하지 않아요.',
      desc: '연결을 확인하고 다시 시도해주세요.',
      showButton: true,
      minHeight: 'min-h-dvh',
    },
  };

  let current;

  // 숫자로 들어오는 HTTP status 처리
  if (typeof variant === 'number') {
    if (variant >= 400 && variant < 500) {
      current = variants[400];
    } else if (variant >= 500) {
      current = variants[500];
    }
  }

  // 숫자로 처리 안 된 경우
  if (!current) {
    current = variants[variant];
  }

  if (!current) {
    current = variants[500];
  }

  return (
    <div
      className={cn(
        'bg-stoov-gray-900 flex flex-col items-center justify-center gap-4 px-4 pt-4',
        fullScreen && 'fixed inset-0 z-100 m-auto max-w-[500px]',

        current.minHeight,
      )}
    >
      {current.image && (
        <div className='h-[200px] w-[200px] overflow-hidden rounded'>
          <img
            src={current.image || PlacePlaceholderSmall}
            alt={current.title}
            className='h-full w-full object-cover'
          />
        </div>
      )}

      <div className='flex flex-col items-center gap-2'>
        <Typography as='h3' variant='headingSm' align='center' className='whitespace-pre-line'>
          {current.title}
        </Typography>

        <Typography variant='bodyMd' color='gray200' align='center' className='whitespace-pre-line'>
          {current.desc}
        </Typography>
      </div>

      {current.showButton && (
        <Button
          size='sm'
          onClick={onButtonClick}
          aria-label={buttonLabel}
          className='w-fit rounded-xl'
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
