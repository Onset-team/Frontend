# 🚀 Stoov - 서울 공식 버스킹 장소 안내 서비스 (Frontend)

> 서울시 공식 버스킹 장소(지자체 검증·허가 기반)를 통합하여 실시간으로 공연자들이 공연 가능한 장소 + 예약 링크를 확인할 수 있는 지도 기반 서비스
---

## 📑 목차

1. [💡 프로젝트 소개](#프로젝트-소개)
2. [🛠️ 기술 스택](#기술-스택)
3. [📂 폴더 구조](#폴더-구조)
4. [⚙️ 실행 방법](#실행-방법)
5. [🤝 협업 규칙](#협업-규칙)
6. [🌟 주요 기능 정리](#주요-기능-정리)
7. [🚀 배포 링크](#배포-링크)


---

## 💡 프로젝트 소개 <a id="프로젝트-소개"></a>

서울 시내 공식 버스킹 장소는 자치구청·재단·공공기관 등 11곳 이상에 분산되어 있고
허가 조건·운영 시간·예약 절차도 모두 달라 공연자 입장에서는
"어디서 합법적으로 공연이 가능한지" 확인하기 어렵다.

STOOV는 이러한 문제를 해결하기 위해:

- 공식 허가 장소만 선별하여 구조화된 정보 제공
- Kakao 지도 기반의 장소 탐색
- 공연자에게 필수적인 예약 링크·허가 조건·운영 정보 등을 상세 제공
- 리뷰 및 즐겨찾기를 통한 사용자 경험 강화

을 목표로 구축된 MVP 서비스이다.

---

## 🛠️ 기술 스택 <a id="기술-스택"></a>

| 구분               | 기술                    | 사용 이유                      |
| ---------------- | --------------------- | -------------------------- |
| **Framework**    | React (Vite)          | 빠른 HMR, 경량 빌드, SPA 개발에 최적화 |
| **Language**     | JavaScript (ES6+)     | 생태계 풍부, 빠른 개발 속도           |
| **Server State** | React Query           | 캐싱·리페치·에러핸들링 자동화           |
| **Global State** | Zustand               | 로그인 상태 등 최소 전역 상태만 관리      |
| **UI/Style**     | Tailwind CSS + CVA    | 디자인 토큰 기반·Variant 유연성      |
| **API**          | Axios (Instance)      | 공통 헤더·인터셉터·에러 구조화          |
| **Router**       | React Router DOM (v7) | Protected Route, 중첩 라우팅    |
| **Deploy**       | Vercel                | 간편하고 빠른 CI/CD              |
| **Code Quality** | ESLint + Prettier     | 코드 일관성 유지                  |

---

## 📂 폴더 구조 <a id="폴더-구조"></a>

```bash
src/
 ├─ features/         # 도메인 단위 (auth, map, performances 등)
 │   ├─ home/               # 지도 메인 페이지 (검색, 필터, 마커)
 │   ├─ place/              # 장소 리스트
 │   ├─ placeDetail/        # 상세 + 후기 + 바텀시트/풀페이지 공통 구조
 │   ├─ review/             # 후기 CRUD (작성, 수정, 삭제)
 │   ├─ favorite/           # 관심 장소
 │   ├─ auth/               # OAuth 로그인 및 인증 흐름
 │   └─ mypage/             # 프로필, 계정 삭제
 │
 ├─ components/       # 전역 공용 UI (Button, Input 등)
 ├─ hooks/            # 전역 커스텀 훅
 ├─ libs/             # axios, queryClient, map sdk 설정 등
 ├─ stores/           # 전역 Zustand store
 ├─ utils/            # 유틸리티 함수 (포맷터, 계산 등)
 ├─ styles/           # Tailwind 및 전역 스타일
 ├─ assets/           # 이미지, 아이콘
 ├─ apis/             # api
 ├─ App.jsx           # 라우팅 및 전역 레이아웃
 └─ main.jsx          # 엔트리 포인트
```

---

## ⚙️ 실행 방법 <a id="실행-방법"></a>

### 1️⃣ 사전 요구사항

- Node.js **v18 이상**
- 패키지 매니저: `npm`
- 백엔드 서버 실행 필요 시: [백엔드 레포지토리](https://github.com/Onset-team/Backend) 참고

### 2️⃣ 설치 및 실행

```bash
# 1. 프로젝트 클론
git clone https://github.com/Onset-team/Frontend.git
cd stoov

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 3️⃣ 환경 변수 (.env)

| 변수명              | 설명            | 예시                      |
| ------------------- | --------------- | ------------------------- |
| `VITE_API_BASE_URL` | 백엔드 API 주소 | `https://api.stoo-v.com` |
| `VITE_KAKAO_MAP_API_KEY` | Kakao 지도 JS SDK key | `your-kakao-js-sdk-key` |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Client ID | `your-google-client-id` |

> ⚠️ 모든 Vite 환경 변수는 VITE\_ prefix 필수

---

## 🤝 협업 규칙 <a id="협업-규칙"></a>

### 📌 브랜치 전략

- `main`: 배포용 브랜치
- `dev`: 통합 개발용
- `feature/*`: 단위 기능 개발
- `fix/*`: 버그 수정
- `chore/*`: 설정 및 문서 작업

> 직접 push 금지, PR 통해서만 병합

### 🧩 커밋 컨벤션

```
[type] 간결한 변경 내용 요약
```

| 타입     | 설명             | 예시                               |
| -------- | ---------------- | ---------------------------------- |
| feat     | 새로운 기능 추가 | `[feat] 공연 등록 기능 구현`       |
| fix      | 버그 수정        | `[fix] 지도 마커 표시 오류 수정`   |
| chore    | 설정, 빌드       | `[chore] ESLint 설정 변경`         |
| refactor | 구조 개선        | `[refactor] useMapStore 로직 분리` |
| style    | 코드 포맷팅      | `[style] Tailwind 클래스 정렬`     |
| docs     | 문서 수정        | `[docs] README 업데이트`           |

---

### 🌟 주요 기능 정리 <a id="주요-기능-정리"></a>

- **Kakao 지도 기반 장소 탐색**
  - 마커 표시 (위치 기반)
  - 검색 / 필터 (장소, 지역명 기반 텍스트 검색)
  - 클릭 시 상세 BottomSheet 표시

- **장소 상세 페이지**
  - 운영 시간, 승인 절차, 예약 링크, 문의처, 안내사항
  - 이미지를 고려한 UI 구조
  - 바텀시트/풀페이지 UI를 공통 컴포넌트로 관리

- **리뷰 기능**
  - 후기 작성 / 수정 / 삭제
  - 로그인 사용자에 대한 isMyReview 처리
  - React Query 기반 리페치 / 캐시 자동화

- **즐겨찾기**
  - 관심 장소 저장 / 해제
  - 카운터 + 마커 연동

- **OAuth 로그인**
  - Google ID Token 인증
  - Zustand로 최소한의 전역 인증 상태 관리

- **마이페이지**
  - 프로필 이미지 업로드
  - 계정 삭제

---

### 🔒 에러/보안 처리

- Axios 인터셉터로 응답 에러 코드 통일
- HTTP status 기반 EmptyState 화면
- 쿠키 인증 대응 가능 구조 (withCredentials 옵션)

---

### 🚀 배포 링크 <a id="배포-링크"></a>

[https://stoov.vercel.app/](https://stoov.vercel.app/)

---
