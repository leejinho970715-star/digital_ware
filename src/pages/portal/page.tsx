import { useState, type FormEvent, type ReactNode } from "react";
import Layout from "../../components/renewal/Layout";
import { SiteLink } from "../../components/renewal/ui";

type PageKey =
  | "government"
  | "inquiry"
  | "business"
  | "customer"
  | "location"
  | "login"
  | "signup";
const pages: Record<
  PageKey,
  { hero: string; section: string; title: string; crumb: string[] }
> = {
  government: {
    hero: "government.png",
    section: "정부지원사업",
    title: "공지사항",
    crumb: ["정부지원사업", "공지사항"],
  },
  inquiry: {
    hero: "purchase.png",
    section: "구입 및 제휴문의",
    title: "제품/서비스 구매상담",
    crumb: ["구입 및 제휴문의", "제품/서비스 구매상담"],
  },
  business: {
    hero: "business.png",
    section: "구입 및 제휴문의",
    title: "비즈니스 제휴 문의",
    crumb: ["구입 및 제휴문의", "비즈니스 제휴 문의"],
  },
  customer: {
    hero: "customer.png",
    section: "고객센터",
    title: "1:1 사용문의",
    crumb: ["고객센터", "1:1 사용문의"],
  },
  location: {
    hero: "customer.png",
    section: "기업소개",
    title: "오시는 길",
    crumb: ["기업소개", "오시는 길"],
  },
  login: {
    hero: "member.png",
    section: "Member",
    title: "로그인",
    crumb: ["Member", "로그인"],
  },
  signup: {
    hero: "member.png",
    section: "Member",
    title: "회원가입",
    crumb: ["Member", "회원가입"],
  },
};

function Shell({ page, children }: { page: PageKey; children: ReactNode }) {
  const info = pages[page];
  return (
    <Layout>
      <section
        className="dw-portal-hero"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/subvisual/${info.hero})`,
        }}
        aria-label={info.section}
      />
      <nav className="dw-breadcrumb" aria-label="현재 위치">
        <div className="dw-container">
          <SiteLink to="/" aria-label="홈">
            ⌂
          </SiteLink>
          {info.crumb.map((item, i) => (
            <span
              key={item}
              className={i === info.crumb.length - 1 ? "is-current" : ""}
            >
              <b>›</b>
              {item}
            </span>
          ))}
        </div>
      </nav>
      <section className="dw-portal-content">
        <div className="dw-container">
          <p className="dw-eyebrow">{info.section}</p>
          <h1>{info.title}</h1>
          {children}
        </div>
      </section>
    </Layout>
  );
}

function SuccessForm({
  children,
  label = "문의하기",
}: {
  children: ReactNode;
  label?: string;
}) {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  return done ? (
    <div className="dw-form-success" role="status">
      <span>✓</span>
      <h2>접수가 완료되었습니다.</h2>
      <p>담당자가 확인한 뒤 입력하신 연락처로 안내드리겠습니다.</p>
      <button onClick={() => setDone(false)}>추가 문의하기</button>
    </div>
  ) : (
    <form className="dw-portal-form dw-card" onSubmit={submit}>
      {children}
      <label className="dw-agree">
        <input required type="checkbox" /> 개인정보 수집 및 이용에 동의합니다.{" "}
        <SiteLink to="/privacy">내용보기</SiteLink>
      </label>
      <button className="dw-submit">{label} →</button>
    </form>
  );
}
const Input = ({
  label,
  required = false,
  type = "text",
  placeholder = "",
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) => (
  <label>
    <span>
      {label}
      {required && <em>*</em>}
    </span>
    <input type={type} required={required} placeholder={placeholder} />
  </label>
);

const notices = [
  ["2026 클라우드 정부지원 사업", "2026-04-02"],
  ["2026 인천 기초형 스마트공장 구축 지원사업", "2026-03-20"],
  ["2026년도 중소기업 클라우드 서비스 보급 확산사업 공고", "2026-02-24"],
  ["2025년 AI바우처 지원사업(AI바우처 분과) 공모", "2025-02-17"],
  ["2026년 일·생활균형 시스템 지원사업", "2026-02-05"],
];

export function GovernmentNotice() {
  return (
    <Shell page="government">
      <div className="dw-board-tools">
        <p>기업 성장을 위한 최신 지원사업 소식을 확인하세요.</p>
        <label>
          <span className="dw-sr-only">공지 검색</span>
          <select aria-label="공지 유형" defaultValue="all">
            <option value="all">전체</option>
            <option value="notice">공지</option>
            <option value="support">지원사업</option>
            <option value="material">자료</option>
          </select>
          <input placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </label>
      </div>
      <div className="dw-board">
        <div className="dw-board-head">
          <span>번호</span>
          <span>제목</span>
          <span>등록일</span>
        </div>
        {notices.map((n, i) => (
          <SiteLink
            className="dw-board-row"
            to={`/government-notice/${notices.length - i}`}
            key={n[0]}
          >
            <span>{notices.length - i}</span>
            <div>
              <b>공지</b>
              <h2>{n[0]}</h2>
            </div>
            <time>{n[1]}</time>
          </SiteLink>
        ))}
      </div>
    </Shell>
  );
}

export function GovernmentNoticeDetail() {
  return (
    <Shell page="government">
      <article className="dw-notice-detail">
        <header>
          <h2>2026 클라우드 정부지원 사업</h2>
          <div>
            <span>등록일 2026-04-02</span>
            <span>조회수 743</span>
          </div>
        </header>
        <div className="dw-notice-body">
          <aside>
            <strong>아이원디지털웨어㈜ 공지사항</strong>
            <p>정부지원 사업 안내입니다.</p>
          </aside>
          <p>2026년 클라우드 정부지원 사업 공고입니다.</p>
          <ul>
            <li>
              <b>지원대상</b> 중소·중견기업 및 소상공인 · 클라우드 도입을
              희망하는 기업
            </li>
            <li>
              <b>지원내용</b> 클라우드 서비스 구축 비용 지원 · 컨설팅 및
              기술지원 · 사후 관리 서비스
            </li>
            <li>
              <b>신청기간</b> 2026년 4월 1일 ~ 2026년 6월 30일
            </li>
            <li>
              <b>문의처</b> 아이원디지털웨어㈜ 정부지원사업팀 Tel: 070-4497-3634
            </li>
          </ul>
        </div>
      </article>
      <div className="dw-post-nav">
        <p>
          <b>이전글</b>
          <span>이전글이 없습니다.</span>
        </p>
        <p>
          <b>다음글</b>
          <SiteLink to="/government-notice/4">
            2025년 AI바우처 지원사업 공모
          </SiteLink>
          <time>2025-02-17</time>
        </p>
      </div>
      <div className="dw-center">
        <SiteLink className="dw-submit dw-list-button" to="/government-notice">
          ☷ 목록으로
        </SiteLink>
      </div>
    </Shell>
  );
}

export function PurchaseInquiry() {
  return (
    <Shell page="inquiry">
      <p className="dw-lead">
        도입을 원하는 제품과 현재 업무 환경을 알려주시면 전문 상담사가
        안내해드립니다.
      </p>
      <SuccessForm>
        <div className="dw-form-grid">
          <Input label="상호(법인명)" required />
          <Input label="사업자등록번호" />
          <Input label="담당자명" required />
          <Input label="직위" />
          <Input label="전화번호" />
          <Input label="핸드폰번호" required />
          <Input label="이메일" type="email" required />
          <label>
            <span>제품선택</span>
            <select defaultValue="">
              <option value="" disabled>
                제품을 선택하세요
              </option>
              <option>SI 개발</option>
              <option>PMS</option>
              <option>데이터 마이그레이션</option>
              <option>OSE-ISMS GUARD</option>
            </select>
          </label>
        </div>
        <label className="dw-full">
          <span>
            문의내용<em>*</em>
          </span>
          <textarea
            required
            maxLength={500}
            rows={7}
            placeholder="문의 내용을 입력하세요."
          />
        </label>
      </SuccessForm>
    </Shell>
  );
}

export function BusinessInquiry() {
  return (
    <Shell page="business">
      <p className="dw-lead">
        함께 새로운 비즈니스 가치를 만들 파트너의 제안을 기다립니다.
      </p>
      <SuccessForm label="제휴 문의하기">
        <div className="dw-form-grid">
          <Input label="회사명" required />
          <Input label="담당자명" required />
          <Input label="연락처" required />
          <Input label="이메일" type="email" required />
          <label>
            <span>제휴 유형</span>
            <select>
              <option>사업 제휴</option>
              <option>기술 제휴</option>
              <option>마케팅 제휴</option>
              <option>기타</option>
            </select>
          </label>
          <Input label="제안 제목" required />
        </div>
        <label className="dw-full">
          <span>
            제안 내용<em>*</em>
          </span>
          <textarea
            required
            rows={8}
            placeholder="제휴 목적과 기대 효과를 입력하세요."
          />
        </label>
      </SuccessForm>
    </Shell>
  );
}

export function CustomerAs() {
  const [tab, setTab] = useState<"inquiry" | "video" | "resources">("inquiry");
  return (
    <Shell page="customer">
      <div
        className="dw-support-tabs"
        role="tablist"
        aria-label="고객센터 메뉴"
      >
        {[
          ["inquiry", "1:1 사용문의"],
          ["video", "동영상 강의"],
          ["resources", "자료실"],
        ].map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            className={tab === key ? "is-active" : ""}
            onClick={() => setTab(key as typeof tab)}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "inquiry" ? (
        <>
          <div className="dw-support-intro">
            <div>
              <span>01</span>
              <h2>문의 접수</h2>
              <p>제품 사용 중 궁금한 점을 자세히 남겨주세요.</p>
            </div>
            <div>
              <span>02</span>
              <h2>담당자 확인</h2>
              <p>전문 담당자가 문의 내용을 확인합니다.</p>
            </div>
            <div>
              <span>03</span>
              <h2>답변 안내</h2>
              <p>등록한 연락처로 해결 방법을 안내합니다.</p>
            </div>
          </div>
          <SuccessForm label="사용문의 등록">
            <div className="dw-form-grid">
              <Input label="회사명" required />
              <Input label="담당자명" required />
              <Input label="연락처" required />
              <Input label="이메일" type="email" required />
              <label>
                <span>문의 제품</span>
                <select>
                  <option>SI 시스템</option>
                  <option>PMS</option>
                  <option>데이터 마이그레이션</option>
                  <option>기타</option>
                </select>
              </label>
              <Input label="문의 제목" required />
            </div>
            <label className="dw-full">
              <span>
                문의 내용<em>*</em>
              </span>
              <textarea required rows={8} />
            </label>
          </SuccessForm>
        </>
      ) : (
        <div className="dw-content-ready" role="tabpanel">
          <span aria-hidden="true">{tab === "video" ? "▷" : "▤"}</span>
          <h2>{tab === "video" ? "동영상 강의" : "자료실"}</h2>
          <p>
            {tab === "video"
              ? "동영상 강의 콘텐츠를 준비 중입니다."
              : "자료실 콘텐츠를 준비 중입니다."}
          </p>
        </div>
      )}
    </Shell>
  );
}

export function Location() {
  return (
    <Shell page="location">
      <div className="dw-location-card">
        <div
          className="dw-map-placeholder"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/location-bg.png)`,
          }}
        >
          <span>IONE</span>
          <strong>아이원디지털웨어</strong>
          <p>서울특별시 구로구 디지털로 285</p>
          <a
            href="https://map.kakao.com/?urlX=476674.0&urlY=1106969.0&name=서울%20구로구%20디지털로%20285"
            target="_blank"
            rel="noreferrer"
          >
            카카오 지도에서 보기 →
          </a>
        </div>
        <div className="dw-location-info">
          <div>
            <b>주소</b>
            <p>
              서울특별시 구로구 디지털로 285
              <br />
              에이스트윈타워 1차 405호
            </p>
          </div>
          <div>
            <b>연락처</b>
            <p>
              대표전화 070-4497-3634
              <br />
              팩스 02-3432-4623
            </p>
          </div>
          <div>
            <b>대중교통</b>
            <p>
              지하철 2호선 구로디지털단지역
              <br />
              롯데시티호텔구로 정류장
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Auth({ signup = false }: { signup?: boolean }) {
  return (
    <Shell page={signup ? "signup" : "login"}>
      <div className="dw-auth-panel dw-card">
        <div className="dw-auth-copy">
          <p>WELCOME TO</p>
          <h2>I-ONE DIGITALWARE</h2>
          <span>
            {signup
              ? "회원가입 후 고객지원 서비스를 편리하게 이용하세요."
              : "등록한 계정으로 로그인하세요."}
          </span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {signup && <Input label="이름" required />}
          <Input label="이메일" type="email" required />
          <Input label="비밀번호" type="password" required />
          {signup && (
            <>
              <Input label="비밀번호 확인" type="password" required />
              <Input label="휴대폰 번호" required />
              <label className="dw-agree">
                <input required type="checkbox" /> 이용약관과 개인정보처리방침에
                동의합니다.
              </label>
            </>
          )}
          <button className="dw-submit">
            {signup ? "회원가입" : "로그인"}
          </button>
          <p className="dw-auth-switch">
            {signup ? (
              <>
                이미 계정이 있으신가요? <SiteLink to="/login">로그인</SiteLink>
              </>
            ) : (
              <>
                아직 회원이 아니신가요?{" "}
                <SiteLink to="/signup">회원가입</SiteLink>
              </>
            )}
          </p>
        </form>
      </div>
    </Shell>
  );
}
export const Login = () => <Auth />;
export const Signup = () => <Auth signup />;
