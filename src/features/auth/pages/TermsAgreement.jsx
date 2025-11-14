import React, { useState } from 'react';
import Checkbox from '@/components/ui/Checkbox';
import Typography from '@/components/ui/Typography';
import IconRight from '../components/IconRight';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function TermsAgreement() {
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    ageVerification: false,
  });

  // 전체 동의 여부
  const isAllChecked = agreements.terms && agreements.privacy && agreements.ageVerification;

  // 전체 동의 체크
  const handleAllCheck = (checked) => {
    setAgreements({
      terms: checked,
      privacy: checked,
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

  return (
    <div className='flex h-[calc(100vh-120px)] flex-col justify-center gap-7 px-4 py-4'>
      {/* 약관 제목 */}
      <div className='inline-flex flex-col'>
        <Typography variant='titleLg' color='white100'>
          서비스 이용을 위해
        </Typography>
        <div className='flex'>
          <Typography variant='titleLg' color='white100'>
            아래 &nbsp;
          </Typography>
          <Typography variant='titleLg' color='orange300'>
            항목에 동의
          </Typography>
          <Typography variant='titleLg' color='white100'>
            해주세요.
          </Typography>
        </div>
      </div>

      {/* 약관 동의 항목 */}
      <div className='flex flex-1 flex-col gap-4'>
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
            checked={agreements.privacy}
            handleChange={() => handleCheck('privacy')}
            label='[필수] 개인정보 수집 및 이용목적 동의 '
          />
          <Link to='/agreement/privacy' className='flex items-center'>
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

      <div>
        <Button disabled={!isAllChecked}>동의하고 시작하기</Button>
      </div>
    </div>
  );
}
