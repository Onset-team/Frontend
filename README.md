# 🚀 Stoov - 실시간 공연 플랫폼

> [서비스 핵심 문구 한 줄 요약]

---

## 📑 목차

1. [💡 프로젝트 소개](#프로젝트-소개)
2. [🛠️ 기술 스택](#기술-스택)
3. [📂 폴더 구조](#폴더-구조)
4. [⚙️ 실행 방법](#실행-방법)
5. [🤝 협업 규칙](#협업-규칙)

---

## 💡 프로젝트 소개 <a id="프로젝트-소개"></a>

- **프로젝트 목적:** [이 프로젝트를 만든 이유 / 문제 정의]
- **핵심 목표:** [프로젝트가 제공하는 주요 가치]
- **주요 기능:**
  - [핵심 기능 1]
  - [핵심 기능 2]
  - [핵심 기능 3]
- **서비스 링크:** [Live Demo](https://서비스주소.com)
- **백엔드 레포:** [Backend Repo](https://github.com/Onset-team/Backend)
- **디자인 문서:** [Figma](https://www.figma.com/)

---

## 🛠️ 기술 스택 <a id="기술-스택"></a>

| 구분             | 기술               | 사용 이유                              |
| ---------------- | ------------------ | -------------------------------------- |
| **Framework**    | React (Vite 기반)  | 빠른 HMR, 빌드 최적화                  |
| **Language**     | JavaScript (ES6+)  | 가볍고 생태계 풍부                     |
| **State Mgmt**   | Zustand            | 전역 상태 간결 관리                    |
| **Server State** | React Query        | 캐싱, 리페칭, 동기화                   |
| **UI/Style**     | Tailwind CSS + CVA | 유틸리티 중심 스타일링 및 Variant 관리 |
| **Form**         | React Hook Form    | 효율적인 폼 상태 및 검증               |
| **API**          | Axios              | REST API 통신                          |
| **Router**       | React Router DOM   | 페이지 전환 및 가드                    |
| **Deploy**       | Vercel             | 빠른 배포 파이프라인                   |
| **Code Quality** | ESLint + Prettier  | 코드 스타일 통일                       |

---

## 📂 폴더 구조 <a id="폴더-구조"></a>

```bash
src/
 ├─ features/         # 도메인 단위 (auth, map, performances 등)
 │   ├─ pages/        # 페이지 단위 컴포넌트
 │   ├─ services/     # API 관련 함수
 │   ├─ components/   # 도메인 한정 컴포넌트
 │   ├─ hooks/        # 도메인 한정 커스텀 훅
 │   └─ stores/       # 도메인 전용 Zustand store
 │
 ├─ components/       # 전역 공용 UI (Button, Input 등)
 ├─ hooks/            # 전역 커스텀 훅
 ├─ libs/             # axios, queryClient, map sdk 설정 등
 ├─ stores/           # 전역 Zustand store
 ├─ utils/            # 유틸리티 함수 (포맷터, 계산 등)
 ├─ styles/           # Tailwind 및 전역 스타일
 ├─ assets/           # 이미지, 아이콘
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

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 3️⃣ 환경 변수 (.env)

| 변수명              | 설명            | 예시                      |
| ------------------- | --------------- | ------------------------- |
| `VITE_API_BASE_URL` | 백엔드 API 주소 | `https://api.example.com` |

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
