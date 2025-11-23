import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 훅
import { useAgreementQuery } from '../hooks/useAgreement';
// 컴포넌트
import Checkbox from '@/components/ui/Checkbox';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
// 아이콘
import IconRight from '../components/IconRight';

export default function TermsAgreement() {
  const { mutate, isPending } = useAgreementQuery();

  const [agreements, setAgreements] = useState({
    consent: false,
    terms: false,
    ageVerification: false,
  });

  // 전체 동의 여부
  const isAllChecked = agreements.terms && agreements.consent && agreements.ageVerification;

  // 전체 동의 체크
  const handleAllCheck = (checked) => {
    setAgreements({
      consent: checked,
      terms: checked,
      ageVerification: checked,
    });
  };

  // 개별 동의 체크
  const handleCheck = (name) => {
    setAgreements({
      ...agreements,
      [name]: !agreements[name],
    });
  };

  const handleAgreementClick = () => {
    mutate();
  };

  return (
    <div className='flex h-[calc(100vh-92px)] flex-col justify-center gap-7 px-4 pt-4'>
      {/* 약관 제목 */}
      <div className='inline-flex flex-col'>
        <Typography variant='titleLg' color='white100'>
          서비스 이용을 위해
        </Typography>

        <Typography variant='titleLg' color='white100'>
          아래&nbsp;
          <Typography as='span' variant='titleLg' color='orange300'>
            항목에 동의
          </Typography>
          해주세요.
        </Typography>
      </div>

      {/* 약관 동의 항목 */}
      <div className='flex flex-1 flex-col gap-4 px-2 pt-4'>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row items-center justify-between'>
            <Checkbox
              checked={isAllChecked}
              handleChange={(e) => handleAllCheck(e.target.checked)}
              label='전체 동의 '
            />
          </div>
          <Typography variant='labelSm3' color='gray300'>
            전체 동의 시 아래 필수 항목을 한 번에 동의할 수 있어요.
          </Typography>
        </div>

        <div className='flex flex-row items-center justify-between'>
          <Checkbox
            checked={agreements.consent}
            handleChange={() => handleCheck('consent')}
            label='[필수] 개인정보 수집 및 이용목적 동의 '
          />
          <Link to='/agreement/consent' className='flex items-center'>
            <IconRight fill='#999999' />
          </Link>
        </div>

        <div className='flex flex-row items-center justify-between'>
          <Checkbox
            checked={agreements.terms}
            handleChange={() => handleCheck('terms')}
            label='[필수] 서비스 이용 약관 동의'
          />
          <Link to='/agreement/terms' className='flex items-center'>
            <IconRight fill='#999999' />
          </Link>
        </div>

        <div className='flex flex-row items-center justify-between'>
          <Checkbox
            checked={agreements.ageVerification}
            handleChange={() => handleCheck('ageVerification')}
            label='[필수]만  14세 이상 이용 동의 '
          />
        </div>
      </div>

      <Button disabled={!isAllChecked} onClick={() => handleAgreementClick()}>
        동의하고 시작하기
      </Button>
    </div>
  );
}
