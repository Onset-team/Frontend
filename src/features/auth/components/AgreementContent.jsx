import Typography from '@/components/ui/Typography';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AgreementContent() {
  const { type } = useParams();

  const agreementContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: '서비스 이용약관',
          effectiveDate: '시행일자 : 2025년 11월 26일',
          content: (
            <div className='flex flex-col gap-5 overflow-y-auto text-sm text-gray-300'>
              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제1조(목적)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  이 약관은 온셋(Onset)(이하 “회사”)이 제공하는 스투브(STOOV) 온라인 서비스(이하
                  “서비스”)의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 정함을 목적으로
                  합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제2조(정의)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. “서비스”란 회사가 운영하는 버스킹 장소 검색, 장소 정보 제공, 후기 공유 등의
                  버스킹 장소 탐색 플랫폼을 의미합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. “회원”이란 서비스에 접속하여 약관에 동의하고 이용 계약을 체결하여 서비스를
                  이용하는 자를 말합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. “장소”란 서비스에서 검색하거나 조회할 수 있는 버스킹 가능 위치 또는 구역을
                  의미합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. “후기”란 회원이 서비스 내에서 장소에 대해 작성하는 텍스트, 이미지 등 게시물을
                  말합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  5. “닉네임”이란 회원의 식별을 위해 사용되는 명칭을 말합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제3조(약관의 게시와 개정)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 약관을 개정하는 경우 적용일자와 개정 사유를 명시하여 회원에게 이메일로
                  안내합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 추후 앱 내 공지 기능이 추가되는 경우 해당 채널을 통해서도 공지할 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회원이 이메일을 확인하지 않아 발생하는 불이익에 대해 회사는 책임을 지지
                  않습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. 변경된 약관은 별도의 명시가 없는 한 공지일로부터 7일 후에 효력이 발생합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  5. 이용자에게 불리한 변경인 경우 최소 30일 전에 공지합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제4조(약관의 해석)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  약관에서 정하지 않은 사항은 관련 법령과 일반적인 관례에 따릅니다. 회사는 서비스
                  운영에 필요한 세부 정책을 별도로 둘 수 있습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제5조(이용 계약의 성립)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 이용 계약은 회원이 약관 및 필수 동의사항에 동의한 후 가입을 신청하고 회사가
                  이를 승인함으로써 성립합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 회사는 다음 각 호에 해당하는 경우 승인을 거부하거나 사후에 계약을 해지할 수
                  있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  가. 타인의 정보 도용
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  나. 허위 정보 기재 또는 필수 정보 누락
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  다. 만 14세 미만의 가입 신청
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  라. 관련 법령 또는 운영 정책 위반
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사는 필요 시 본인확인 절차를 요청할 수 있습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제6조(회원과 비회원의 이용 범위)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 비회원은 장소 검색, 상세 정보 열람 등 기본적인 서비스 기능을 이용할 수
                  있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 관심(즐겨찾기), 후기 작성, 마이페이지 등 개인화가 필요한 기능은 회원에게만
                  제공됩니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제7조(연령 기준)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회원은 만 14세 이상이어야 하며, 회사는 필요 시 연령 확인 절차를 진행할 수
                  있습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제8조(계정 및 소셜 로그인)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회원은 구글 등 외부 소셜 로그인 계정을 통해 서비스에 가입합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 회사는 회원의 동의 범위 내에서 이메일, 프로필 이미지 등 최소한의 정보를
                  수집합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사는 자체 회원가입 기능을 운영하지 않으며, 로그인 및 인증 절차는 사용자가
                  선택한 소셜 플랫폼의 정책을 따릅니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제9조(개인정보 보호)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회원의 개인정보 처리에 관한 사항은 회사의 개인정보 처리방침 및 개인정보 수집 및
                  이용 동의서의 내용을 따릅니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제10조(서비스의 내용)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사가 제공하는 서비스는 다음과 같습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  가. 공연 가능 장소 정보 검색 및 열람
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  나. 허가 여부, 이용 가능 요일·시간, 담당 부서, 예약 링크 등 안내
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  다. 관심 장소 저장 및 후기 작성 기능
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-4'>
                  라. 회사가 추가로 제공하는 서비스
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 회사는 예약 당사자가 아니며, 외부 예약 페이지로 연결될 수 있습니다. 예약 및
                  환불 등은 운영 주체의 정책에 따릅니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제11조(정보의 출처와 정확성)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 장소 정보는 지자체, 공공기관, 재단, 운영 주체의 자료 및 이용자 제공 정보 등을
                  바탕으로 수집·정리됩니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 장소 정보는 운영 주체의 정책 변경 또는 현장 상황에 따라 사전 고지 없이 변경될
                  수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사가 제공하는 정보는 참고용 안내에 불과하며, 최신성·정확성·이용 가능 여부를
                  실시간으로 보장하지 않습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. 회원은 실제 공연 이용을 위해 운영 주체의 공식 공지 또는 문의를 통해 최신 정보를
                  직접 확인해야 합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  5. 회사가 제공하는 정보는 참고용 안내에 불과하며, 최신성·정확성·이용 가능 여부를
                  실시간으로 보장하지 않습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제12조(외부 링크)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  서비스에는 제3자 웹사이트로 연결되는 링크가 포함될 수 있으며, 회사는 해당 사이트
                  이용으로 인해 발생한 문제에 대해 책임을 지지 않습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제13조(게시물의 권리와 관리)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 후기 등 게시물의 저작권은 게시자에게 귀속됩니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 회사는 법령 위반 또는 권리 침해가 명백한 경우 게시물을 임시로 차단하거나 삭제할
                  수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회원 탈퇴 시 작성한 후기는 서비스 화면에서는 즉시 비노출 처리되며, 내부 DB에는
                  1년간 보관 후 삭제됩니다. (보관 기간은 개인정보 처리방침의 기준을 따릅니다.)
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제14조(이용자의 의무)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회원은 다음 행위를 해서는 안 됩니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 허위 정보 등록, 타인 정보 도용
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 법령, 약관, 운영 정책 위반
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 저작권, 상표권 등 타인의 권리 침해
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 서비스의 비정상적 이용(크롤링, 스크래핑, 자동화 수단 등을 통한 접근)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 무단 공연, 허가 요건 불이행, 안전 수칙 위반을 조장하는 행위
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 기타 공서양속 또는 관련 법령에 위반되는 행위
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제15조(통지)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회사는 회원에게 이메일 또는 앱 알림 등 전자적 수단을 통해 필요한 사항을 통지할 수
                  있습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제16조(서비스의 변경 및 중단)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 운영상 또는 법령상 필요한 경우 서비스의 전부 또는 일부를 변경할 수
                  있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 긴급 장애 등 부득이한 사유가 있는 경우 사후 통지할 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사는 고의 또는 중대한 과실이 없는 한 서비스 변경 또는 중단으로 인한 손해에
                  대해 책임을 지지 않습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제17조(계약 해지)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회원은 언제든지 서비스 내 탈퇴 메뉴를 통해 계약 해지를 요청할 수 있으며, 회사는
                  관련 법령에 따라 신속하게 처리합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제18조(책임 제한)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회사는 천재지변, 통신 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을
                  지지 않으며, 회사의 고의 또는 중대한 과실이 없는 경우에도 손해배상 책임을 부담하지
                  않습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제19조(준거법 및 재판 관할)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. “회사”와 “회원” 간에 제기된 소송은 대한민국 법률을 준거법으로 합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. “회사”와 “회원” 간 발생한 분쟁에 관한 소송은 제소 당시 “회원”의 주소를 관할하는
                  지방법원을 전속관할로 하고, 주소가 없는 경우에는 거소를 관할하는 지방법원을
                  전속관할로 합니다. 단, 제소 당시 “회원”의 주소 또는 거소가 명확하지 아니한
                  경우에는 「민사소송법」에 따라 관할법원을 정합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 해외에 주소나 거소가 있는 “회원”의 경우, “회사”와 “회원” 간 발생한 분쟁에 관한
                  소송은 전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  부칙
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 본 약관은 서비스 정식 오픈일인 2025년 11월 26일부터 시행합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 본 약관은 최초 제정된 약관이며 시행일 이전에는 개정 이력이 없습니다.
                </Typography>
              </div>
            </div>
          ),
        };
      case 'terms':
        return {
          title: '개인정보 수집 및 이용동의',
          effectiveDate: '시행일자 : 2025년 11월 26일',
          content: (
            <div className='flex flex-col gap-5 overflow-y-auto text-sm text-gray-300'>
              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제1조(목적)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  본 개인정보 수집 및 이용 동의서는 온셋(Onset)(이하 “회사”)이 운영하는
                  스투브(STOOV) 서비스(이하 “서비스”)를 이용함에 있어, 이용자의 개인정보가 어떠한
                  방식으로 수집·이용·보관·파기되는지를 설명함을 목적으로 합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제2조(개인정보 수집의 원칙)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 「개인정보 보호법」 등 관련 법령을 준수하며, 서비스 제공에 필요한
                  최소한의 개인정보만을 수집합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 이용자의 동의 없이는 수집 목적 외로 이용하거나 제3자에게 제공하지 않습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 단, 법령에 근거하거나 수사·조사 등 공공기관의 요청이 있는 경우 예외로 합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제3조(수집 항목 및 수집 방법)
                </Typography>
                <table className='mt-1 w-full border-collapse'>
                  <thead className='bg-stoov-gray-800 text-left text-xs leading-4 font-semibold'>
                    <tr>
                      <th className='border-stoov-gray-600 w-10 border p-2'>구분</th>
                      <th className='border-stoov-gray-600 w-20 border p-2'>수집 목적</th>
                      <th className='border-stoov-gray-600 w-22 border p-2'>수집 항목</th>
                      <th className='border-stoov-gray-600 w-20 border p-2'>수집 방법</th>
                    </tr>
                  </thead>
                  <tbody className='text-xs leading-4 font-normal'>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>필수</td>
                      <td className='border-stoov-gray-600 border p-2'>회원가입 및 본인 식별</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        구글 계정 이메일, 프로필 이미지
                      </td>
                      <td className='border-stoov-gray-600 border p-2'>
                        Google OAuth 로그인 시 자동 수집
                      </td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>필수</td>
                      <td className='border-stoov-gray-600 border p-2'>서비스 이용 기록 관리</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        장소 즐겨찾기, 후기 작성 이력, 접속 로그, 이용 시간 등
                      </td>
                      <td className='border-stoov-gray-600 border p-2'>
                        서비스 이용 시 자동 생성 및 수집
                      </td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>필수</td>
                      <td className='border-stoov-gray-600 border p-2'>후기 작성</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        후기 내용, 작성 일시, 장소 ID
                      </td>
                      <td className='border-stoov-gray-600 border p-2'>회원이 직접 입력</td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>선택</td>
                      <td className='border-stoov-gray-600 border p-2'>사용자 편의 제공</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        프로필 이미지 변경 시 업로드 파일
                      </td>
                      <td className='border-stoov-gray-600 border p-2'>회원 설정 시 직접 입력</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제4조(개인정보의 이용 목적)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  회사는 수집한 개인정보를 다음의 목적에 한해 이용합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회원 식별, 로그인 인증 및 서비스 제공
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 관심 장소 저장, 후기 작성 등 개인화 서비스 제공
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 고객 문의 응대 및 불만 처리
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. 서비스 이용 통계, 기능 개선 및 품질 향상
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  5. 서비스 부정 이용 방지 및 안전한 이용환경 조성
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  6. 신규 기능, 업데이트, 공지사항 등 서비스 운영 관련 정보 제공
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  (※ 선택 동의: 광고성 정보 수신 관련 내용은 별도의 “마케팅 정보 수신 동의서”로
                  분리하여 안내합니다.)
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제5조(개인정보의 보유 및 이용 기간)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 개인정보의 수집·이용 목적이 달성된 후에는 원칙적으로 해당 정보를 지체
                  없이 파기합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 본 동의서에서는 회원 가입 및 서비스 이용 과정에서 아래 항목을 수집·이용합니다.
                </Typography>
                <table className='mt-1 mb-1 w-full border-collapse'>
                  <thead className='bg-stoov-gray-800 text-left text-xs leading-4 font-semibold'>
                    <tr>
                      <th className='border-stoov-gray-600 border p-2'>보관 항목</th>
                      <th className='border-stoov-gray-600 border p-2'>보관 사유</th>
                      <th className='border-stoov-gray-600 border p-2'>보유 기간</th>
                    </tr>
                  </thead>
                  <tbody className='text-xs leading-4 font-normal'>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>후기 데이터(내용, 장소 ID 등)</td>
                      <td className='border-stoov-gray-600 border p-2'>서비스 악용 방지 및 분쟁 대응</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        탈퇴 후 1년
                      </td>

                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>접속 로그 및 이용 기록</td>
                      <td className='border-stoov-gray-600 border p-2'>통신비밀보호법 준수</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        3개월
                      </td>

                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>서비스 이용 동의 내역</td>
                      <td className='border-stoov-gray-600 border p-2'>이용자 확인 근거</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        3년
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 보유 기간 경과 후 개인정보는 복구 불가능한 방식으로 즉시 파기합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제6조(개인정보의 제3자 제공 및 위탁)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 원칙적으로 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 단, 서비스 제공을 위하여 다음과 같이 위탁할 수 있습니다.
                </Typography>
                <table className='mt-1 w-full border-collapse'>
                  <thead className='bg-stoov-gray-800 text-left text-xs leading-4 font-semibold'>
                    <tr>
                      <th className='border-stoov-gray-600 border p-2'>수탁 업체</th>
                      <th className='border-stoov-gray-600 border p-2'>위탁 업무 내용</th>
                      <th className='border-stoov-gray-600 border p-2'>보유 및 이용 기간</th>
                    </tr>
                  </thead>
                  <tbody className='text-xs leading-4 font-normal'>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>Google LLC</td>
                      <td className='border-stoov-gray-600 border p-2'>소셜 로그인 인증 및 사용자 식별</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        회원 탈퇴 또는 위탁 계약 종료시까지
                      </td>

                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>Amazon Web Services Inc.</td>
                      <td className='border-stoov-gray-600 border p-2'>서비스 서버 운영 및 데이터 보관</td>
                      <td className='border-stoov-gray-600 border p-2'>
                        회원 탈퇴 또는 계약 종료 시까지
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제7조(회원 탈퇴 및 개인정보 파기 절차)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회원 탈퇴 시 작성한 후기는 서비스 화면에서 즉시 삭제됩니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 단, 서비스 악용 방지 및 이용자 보호를 위해 내부 DB에는 1년간 보관 후 완전
                  파기합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사는 개인정보 파기 시 복구 및 재생이 불가능한 기술적 조치를 적용합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. 종이문서의 경우에는 분쇄하거나 소각하여 파기합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제8조(만 14세 이상 이용 동의)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 본 서비스는 만 14세 미만 아동의 회원가입을 허용하지 않습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 회사는 필요 시 연령 확인 절차를 거칠 수 있으며, 허위 정보 기재가 확인된 경우
                  이용계약을 해지할 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회원가입 시 “만 14세 이상입니다” 항목에 동의해야 서비스 가입이 가능합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제9조(이용자의 권리와 행사 방법)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 이용자는 언제든지 자신의 개인정보를 열람, 수정, 삭제할 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 개인정보 열람·정정·삭제 요청은 아래의 공식 이메일을 통해 신청할 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-3'>
                  - 개인정보 요청 접수 이메일 : contact@stoov.co.kr
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 회사는 본인 확인 후 지체 없이 필요한 조치를 취합니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제10조(개인정보 보호책임자)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  회원은 아래의 연락처로 개인정보보호 관련 민원을 개인정보 관리책임자 혹은
                  담당부서로 신고할 수 있습니다.
                </Typography>
                <table className='mt-1 w-full border-collapse'>
                  <thead className='bg-stoov-gray-800 text-left text-xs leading-4 font-semibold'>
                    <tr>
                      <th className='border-stoov-gray-600 w-40 border p-2'>구분</th>
                      <th className='border-stoov-gray-600 w-40 border p-2'>담당자 정보</th>
                    </tr>
                  </thead>
                  <tbody className='text-xs leading-4 font-normal'>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>개인정보 보호책임자</td>
                      <td className='border-stoov-gray-600 border p-2'>이영선</td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>담당부서</td>
                      <td className='border-stoov-gray-600 border p-2'>서비스 기획팀</td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>이메일</td>
                      <td className='border-stoov-gray-600 border p-2'>privacy@stoov.co.kr</td>
                    </tr>
                    <tr>
                      <td className='border-stoov-gray-600 border p-2'>연락처</td>
                      <td className='border-stoov-gray-600 border p-2'>02-1234-5678</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제11조(권익침해에 대한 구제방법)
                </Typography>
                <Typography variant='labelSm2' color='gray300'>
                  기타 개인정보 침해에 대해 피해구제, 상담 당을 아래의 기관에 문의하실 수 있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  제12조(방침의 변경 및 고지)
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 회사는 관련 법령, 정부지침, 서비스 정책 변경에 따라 본 동의서를 개정할 수
                  있습니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 개정 시 시행일 7일 전부터 서비스 내 공지하며, 이용자 권리에 중대한 변경이 있을
                  경우 30일 전부터 공지합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  3. 본 동의서는 서비스 내 [이용약관 및 정책] 메뉴에서 언제든지 확인할 수 있습니다.
                </Typography>
              </div>

              <div className='flex flex-col'>
                <Typography variant='labelSm1' color='gray300' className='h-7.5 leading-7.5'>
                  부칙
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  1. 본 동의서는 서비스 정식 오픈일인 2025년 11월 26일부터 시행합니다.
                </Typography>
                <Typography variant='labelSm2' color='gray300' className='indent-1'>
                  2. 본 동의서는 최초 제정된 버전으로, 시행일 이전에는 개정 이력이 없습니다.
                </Typography>
              </div>
            </div>
          ),
        };
      case 'ageVerification':
        return {
          title: '개인정보 처리방침',
          effectiveDate: '시행일자 : 2025년 11월 26일',
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

  const { title, effectiveDate, content } = agreementContent();

  return (
    <div className='h-full overflow-y-auto px-4 py-4'>
      <div className='flex flex-col gap-4'>
        <Typography variant='titleSm' color='white100'>
          {title}
        </Typography>

        <div className='flex flex-col gap-5'>
          <Typography variant='labelSm1' color='gray300'>
            {effectiveDate}
          </Typography>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
