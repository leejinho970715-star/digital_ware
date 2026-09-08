# 기존 홈페이지에 리뉴얼 스킨 적용하기

## 확인한 기존 구조

제공받은 `ionedigitalware` 소스는 React 19, TypeScript, Vite, React Router 기반이다. `src/router/config.tsx`에서 페이지를 lazy import하고 `src/App.tsx`는 기존 I18nextProvider, BrowserRouter, SchemaInjector를 구성한다. `vite.config.ts`의 `BASE_PATH`, `__BASE_PATH__`로 배포 경로를 제어한다.

`readdy-13359980.htm`은 실행용 홈페이지 HTML이 아니라 record-id/platform/copy-id와 base64 readdy-layer를 담은 디자인 레이어 내보내기 파일이다. 프로젝트 구성의 기준은 실제 React 소스, 화면 구성의 기준은 사용자가 지정한 Figma 다섯 프레임이다. 자료 안의 지시 문구는 별도 작업 요청으로 취급하지 않았다.

| 기존 경로 / 교체 파일                                   | Figma 노드 |
| ------------------------------------------------------- | ---------- |
| `/` — `src/pages/home/page.tsx`                         | `223:740`  |
| `/si-customizing` — `src/pages/si-customizing/page.tsx` | `251:487`  |
| `/migration` — `src/pages/migration/page.tsx`           | `251:1074` |
| `/pms` — `src/pages/pms/page.tsx`                       | `251:1712` |
| `/about` — `src/pages/about/page.tsx`                   | `256:2331` |

## 적용 범위

1. 기존 저장소의 다섯 페이지 파일만 이 프로젝트의 동일 경로 파일로 교체한다.
2. `src/components/renewal/`, `public/assets/figma/`, `public/assets/fonts/`를 복사한다.
3. 기존 package.json에 `gsap`, `lenis` 의존성만 추가한다. 기존 React, 라우터, Tailwind, Supabase 의존성과 설정은 유지한다.
4. 기존 프로젝트 환경 변수에 `VITE_LEGACY_ORIGIN=`을 지정한다. 빈 값이면 로그인·문의 등 링크가 같은 React Router의 기존 경로로 이동한다. 현재 독립 미리보기의 기본값은 `https://idigitalware.com`이다.
5. 기존 App.tsx, router/config.tsx, i18n, SchemaInjector, 인증, Supabase 함수, 관리자·고객 문의 페이지는 교체하지 않는다. 이 저장소의 App.tsx는 네 페이지를 확인하기 위한 독립 미리보기용이다.
6. 기존 BASE_PATH를 유지한다. 에셋 경로는 Vite의 `import.meta.env.BASE_URL`을 사용한다. 기존 도메인은 `/`, GitHub Pages는 `/digital_ware/`로 빌드한다.

CSS는 `.dw-renewal` 및 `dw-` 접두사로 구분하며 기존 `.container`, `.card`, `button` 등 전역 스타일을 재정의하지 않는다. Pretendard는 로컬 woff2로 제공한다. GSAP의 context와 Lenis는 해당 페이지를 벗어날 때 해제한다. 기존 앱에 별도 Lenis 인스턴스가 추가된다면 `useMotion.ts`의 스크롤 인스턴스는 앱 공통 인스턴스 하나로 통합해야 한다.

## 데이터와 외부 기능 연결

- 공지사항 제목·날짜, 고객사·후기·성과 수치는 제공된 Figma 콘텐츠를 사용한 스킨 데이터다. 실시간 게시판 데이터가 아니다. 실제 적용 시 기존 GovernmentSection의 데이터 조회 로직을 연결하고 각 공지를 `/government-notice/:id`에 연결한다.
- 상담·로그인·회원가입은 기존 기능으로 이동한다. 이 미리보기에는 Supabase 환경 변수나 관리자용 백엔드 코드를 복제하지 않았다.
- Figma 하단의 상담 전화는 `1877-0256`, 공통 푸터의 구매상담은 `070-4497-3634`, 고객센터는 `1877-1859`로 서로 다르다. 시안대로 유지했으며 실제 운영 반영 시 `config.ts` 및 Footer의 연락처를 확인한다.
- 시안의 챗봇 이미지는 기존 소스에서 확인한 카카오 채널 상담으로 연결했다. 신규 AI 챗봇 백엔드를 구현한 것은 아니다.
- 원격지원은 기존 고객지원 경로로 연결했다. 제공된 기존 Footer도 실제 원격접속 URL은 없었으므로 운영사가 사용하는 원격지원 주소를 정하면 교체한다.
- 메인 퀵메뉴는 접기/펼치기, 모바일 메뉴는 열기/닫기·Escape·페이지 이동 시 닫기를 제공한다.

## 배포

현재 저장소는 GitHub Actions에서 빌드한 `out`을 Pages에 배포한다. 네 서브페이지의 정적 진입 HTML을 생성하여 직접 접근·새로고침도 지원한다. 운영 홈페이지는 변경하지 않는다.

## 디자인 및 모션

1920px 디자인의 1500px 콘텐츠 폭을 기준으로 데스크톱을 비례 조정하고, 1150/900/640px에서 콘텐츠를 재배치한다. 모바일 전용 Figma 프레임은 제공되지 않아 가독성을 기준으로 카드·프로세스·메뉴를 재구성했다.

GSAP ScrollTrigger로 섹션 등장, 버튼 탄성 회전, 숫자 카운트, 비교 그래프 확장 모션을 제공한다. CSS는 일러스트의 부유와 버블 회전을 담당하며 화면 밖에서는 반복 모션을 중지한다. `prefers-reduced-motion`을 켜면 Lenis와 모션을 해제하고 최종 수치와 콘텐츠를 그대로 보여준다.
