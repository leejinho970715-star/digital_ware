# 아이원디지털웨어 리뉴얼

Figma 네 프레임을 구현한 React 19 · TypeScript 기반의 반응형 UI 스킨입니다. 기존 홈페이지의 프레임워크와 페이지 경로를 유지했습니다.

| 페이지              | 미리보기                                                           |
| ------------------- | ------------------------------------------------------------------ |
| 메인                | https://leejinho970715-star.github.io/digital_ware/                |
| SI 커스터마이징     | https://leejinho970715-star.github.io/digital_ware/si-customizing/ |
| 데이터 마이그레이션 | https://leejinho970715-star.github.io/digital_ware/migration/      |
| PMS 솔루션          | https://leejinho970715-star.github.io/digital_ware/pms/            |

## 개발

Node.js 22 이상에서 `npm ci` 후 `npm run dev`로 실행합니다.
`npm run build`는 TypeScript 검사, Vite 빌드, 서브페이지 정적 진입 파일 생성을 수행합니다.
빌드 결과는 `out/`에 생성됩니다.

GitHub Actions가 `main` 푸시마다 `/digital_ware/` 경로로 빌드하여 GitHub Pages에 배포합니다.
기존 사이트에 적용하는 경우 `BASE_PATH=/`를 사용합니다.

## 구현

- Figma 원본 이미지·SVG 에셋 133개 및 Pretendard 폰트 로컬 저장
- GSAP ScrollTrigger와 Lenis 스크롤, 숫자 카운트, 버튼 등장, 그래프 확장, 부유·버블 회전 모션
- 모바일 서비스 메뉴, 실제 경로 링크, 키보드 포커스, 동작 줄이기 설정 지원
- `dw-` CSS 접두사, 페이지별 모션 수명 관리, 기존 기능으로 연결하는 경로 어댑터

공지사항·후기·성과 수치는 Figma의 화면 콘텐츠이며 실시간 게시판 조회는 아닙니다. 로그인·문의·고객지원은 기존 운영 사이트로 연결합니다. 기존 사이트에 스킨을 이식하는 절차와 연결 지점은 [INTEGRATION.md](docs/INTEGRATION.md)를 참고하세요.
