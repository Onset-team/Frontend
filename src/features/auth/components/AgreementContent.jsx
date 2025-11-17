import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AgreementContent() {
  const { type } = useParams();

  const agreementContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: '서비스 이용약관',
          content: (
            <div className='max-h-[500px] overflow-y-auto text-sm text-gray-600'>
              <p>제1조(목적)</p>
              <p className='pb-[12px]'>
                이 약관은 온셋(Onset)(이하 “회사”)이 제공하는 스투브(STOOV) 온라인 서비스(이하
                “서비스”)의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 정함을 목적으로
                합니다.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: '개인정보 수집 및 이용동의',
          content: (
            <div className='max-h-[500px] overflow-y-auto text-sm text-gray-600'>
              <p>
                본 개인정보 수집 및 이용 동의서는 온셋(Onset)(이하 “회사”)이 운영하는 스투브(STOOV)
                서비스(이하 “서비스”)를 이용함에 있어, 이용자의 개인정보가 어떠한 방식으로
                수집·이용·보관·파기되는지를 설명함을 목적으로 합니다.
              </p>
            </div>
          ),
        };
      case 'ageVerification':
        return {
          title: '[필수] 민감정보 수집 및 이용 동의',
          content: (
            <div className='max-h-[500px] overflow-y-auto text-sm text-gray-600'>
              <p>1. 수집 항목</p>
              <p className='pl-[12px]'>- 키, 현재 체중, 목표 체중, 목표 유형</p>
              <p className='pb-[12px] pl-[12px]'>- 식단 및 수분 기록, 칼로리·영양성분</p>

              <p>2. 수집 목적</p>
              <p className='pl-[12px]'>- 맞춤형 건강/식단 관리 서비스 제공</p>
              <p className='pb-[12px] pl-[12px]'>- 체중·영양·활동량 분석 및 AI 피드백 제공</p>

              <p>3. 보관 기간</p>
              <p className='pl-[12px]'>- 회원 탈퇴 시 즉시 삭제</p>
              <p className='pb-[12px] pl-[12px]'>
                - 단, 관련 법령에 따라 일정 기간 보관 필요 시 해당 법령에 따름
              </p>

              <p>4. 동의 거부권 안내</p>
              <p className='pl-[12px]'>- 회원은 개인정보 수집·이용에 동의하지 않을 수 있습니다.</p>
              <p className='pb-[12px] pl-[12px]'>
                - 단, 필수 항목에 동의하지 않을 경우 회원가입이 제한됩니다.
              </p>
            </div>
          ),
        };
      default:
        return { title: '', body: null };
    }
  };

  const { title, content } = agreementContent();

  return (
    <div className='px-4'>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}
