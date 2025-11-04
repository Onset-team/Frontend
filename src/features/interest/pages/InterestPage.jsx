import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import Typography from '@/components/ui/Typography';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';
import Modal from '@/components/ui/Modal';

export default function InterestPage() {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    toast.success('로그인 성공!');
  };

  return (
    <div>
      {/* Typography 컴포넌트 사용법 */}
      <div className=''>
        {/* as로 태그 변경 가능, 디폴트: p태그 */}
        <Typography as='h1' variant='display' weight='regular' color='default' align='left'>
          Typography
        </Typography>
        <Typography as='h2' variant='h1' weight='medium' color='primary' align='center'>
          Typography
        </Typography>
        <Typography as='div' variant='title' weight='semiBold' color='primary' align='right'>
          Typography
        </Typography>
        <Typography
          as='div'
          variant='caption'
          weight='bold'
          color='black'
          align='left'
          className='bg-stoov-white-100'
        >
          Typography
        </Typography>
      </div>

      {/* cn 유틸 함수 사용법 */}
      <div className=''>
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className={cn(
            // cn 유틸 함수 clsx 쓰는 곳에 기존과 같이 쓰면 됩니다
            'rounded-md px-6 py-3 font-semibold transition-colors duration-200',
            'border border-gray-300',

            // 짧은 경우 삼항연산자로 사용해도 됨
            isActive && 'border-blue-600 bg-blue-500 text-white',
            !isActive && 'bg-gray-100 text-gray-800 hover:bg-gray-200',
          )}
        >
          {isActive ? '활성화됨' : '비활성화됨'}
        </button>
      </div>

      <div className=''>
        <Input label='이메일' name='email' placeholder='이메일을 입력하세요' />

        <Input
          label='이메일'
          name='email'
          state='error'
          errorMessage='이메일 형식이 올바르지 않습니다.'
          placeholder='user@example.com'
        />

        <Input
          label='아이디'
          name='userId'
          placeholder='자동으로 입력됩니다'
          disabled
          state='disabled'
        />
        <Input
          label='검색'
          name='search'
          placeholder='버스커 이름이나 장소 검색'
          leftSlot={<span className='text-sm text-gray-400'>🔍</span>}
        />
        <Input
          label='비밀번호'
          name='password'
          type='password'
          placeholder='비밀번호 입력'
          rightSlot={
            <button type='button' className='px-1 text-xs text-gray-400 hover:text-gray-600'>
              보기
            </button>
          }
        />
        <Input
          placeholder='공연 장소, 버스커 검색'
          rounded='full'
          leftSlot={<span className='text-gray-400'>📍</span>}
        />
        <Input
          label='참여 인원'
          name='people'
          type='number'
          min={1}
          placeholder='숫자만 입력하세요'
        />
      </div>

      <div className=''>
        <div className='flex gap-3'>
          <Button>기본 버튼</Button>
          <Button variant='line'>보조 버튼</Button>
          <Button disabled>비활성화</Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button rounded='sm'>Rounded sm</Button>
          <Button rounded='md'>Rounded md</Button>
          <Button rounded='lg'>Rounded lg</Button>
          <Button rounded='full'>Rounded full</Button>
        </div>

        <div className='flex gap-3'>
          <Button onClick={handleClick} variant='line' size='md'>
            토스트 알림 테스트
          </Button>
        </div>
      </div>

      <Modal
        isOpen={open}
        closable={false}
        onClose={() => setOpen(false)}
        leftButtonLabel='취소'
        rightButtonLabel='확인'
        onLeftButtonClick={() => setOpen(false)}
      >
        <div className='flex flex-col items-center gap-3 py-5'>
          <Typography as='h2' variant='title' weight='semiBold' color='default'>
            정말 삭제할까요?
          </Typography>
          <Typography variant='caption' color='gray'>
            삭제하면~~
          </Typography>
        </div>
      </Modal>

      {/* <Modal
        isOpen={open}
        closable={false}
        onClose={() => setOpen(false)}
        rightButtonLabel='확인'
        onRightButtonClick={() => setOpen(false)}
      >
        <div className='flex flex-col items-center gap-3 py-5'>
          <Typography as='h2' variant='title' weight='semiBold' color='default'>
            로그아웃 되었습니다.
          </Typography>
          <Typography variant='caption' color='gray'>
            다시 로그인 해주세요.
          </Typography>
        </div>
      </Modal> */}

      {/* <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title='공유 방법 선택'
        variant='bottom'
        leftButtonLabel='취소'
        rightButtonLabel='확인'
        onLeftButtonClick={() => setOpen(false)}
      >
        <div className='space-y-2'>
          <p>내용</p>
        </div>
      </Modal> */}
    </div>
  );
}
