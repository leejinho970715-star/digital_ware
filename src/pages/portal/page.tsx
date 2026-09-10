import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/renewal/Layout";
import { SiteLink } from "../../components/renewal/ui";
import {
  setDemoAuthenticated,
  useDemoAuth,
} from "../../components/renewal/auth";

type PageKey =
  | "government"
  | "inquiry"
  | "business"
  | "customer"
  | "location"
  | "login"
  | "signup"
  | "mypage";
const pages: Record<
  PageKey,
  {
    hero: string;
    section: string;
    title: string;
    crumb: string[];
    heroTitle?: string;
    heroDescription?: string;
  }
> = {
  government: {
    hero: "mypage-bg.png",
    section: "정부지원사업",
    title: "공지사항",
    crumb: ["정부지원사업", "공지사항"],
    heroTitle: "GOVERNMENT SUPPORT PROJECT",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  inquiry: {
    hero: "mypage-bg.png",
    section: "구입 및 제휴문의",
    title: "제품/서비스 구매상담",
    crumb: ["구입 및 제휴문의", "제품/서비스 구매상담"],
    heroTitle: "Purchase Inquiry",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  business: {
    hero: "mypage-bg.png",
    section: "구입 및 제휴문의",
    title: "비즈니스 제휴 문의",
    crumb: ["구입 및 제휴문의", "비즈니스 제휴 문의"],
    heroTitle: "Business Partnership Inquiry",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  customer: {
    hero: "mypage-bg.png",
    section: "고객센터",
    title: "1:1 사용문의",
    crumb: ["고객센터", "1:1 사용문의"],
    heroTitle: "Customer Center",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  location: {
    hero: "mypage-bg.png",
    section: "기업소개",
    title: "오시는 길",
    crumb: ["기업소개", "오시는 길"],
    heroTitle: "Location",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  login: {
    hero: "mypage-bg.png",
    section: "Member",
    title: "로그인",
    crumb: ["Member", "로그인"],
    heroTitle: "Member",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  signup: {
    hero: "mypage-bg.png",
    section: "Member",
    title: "회원가입",
    crumb: ["Member", "회원가입"],
    heroTitle: "Member",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
  },
  mypage: {
    hero: "mypage-bg.png",
    section: "Member",
    title: "마이페이지",
    crumb: ["마이페이지"],
    heroTitle: "My Page",
    heroDescription:
      "기업을 위한 모든 ICT Solution과 Service를 제공하는 아이원디지털웨어㈜",
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
      >
        {info.heroTitle && (
          <div className="dw-portal-hero-copy">
            <h2>{info.heroTitle}</h2>
            <p>{info.heroDescription}</p>
          </div>
        )}
      </section>
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
  defaultValue,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => (
  <label>
    <span>
      {label}
      {required && <em>*</em>}
    </span>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      defaultValue={value === undefined ? defaultValue : undefined}
      value={value}
      onChange={value === undefined ? undefined : (event) => onChange?.(event.target.value)}
    />
  </label>
);

const notices = [
  {
    id: 5,
    title: "2026 클라우드 정부지원 사업",
    date: "2026-04-02",
    description: "2026년 클라우드 정부지원 사업 공고입니다.",
    period: "2026년 4월 1일 ~ 2026년 6월 30일",
  },
  {
    id: 4,
    title: "2026 인천 기초형 스마트공장 구축 지원사업",
    date: "2026-03-20",
    description: "인천 지역 중소기업을 위한 기초형 스마트공장 구축 지원사업 공고입니다.",
    period: "2026년 3월 20일 ~ 2026년 5월 29일",
  },
  {
    id: 3,
    title: "2026년도 중소기업 클라우드 서비스 보급 확산사업 공고",
    date: "2026-02-24",
    description: "중소기업의 디지털 전환을 지원하는 클라우드 서비스 보급 확산사업 공고입니다.",
    period: "2026년 2월 24일 ~ 2026년 4월 30일",
  },
  {
    id: 2,
    title: "2025년 AI바우처 지원사업(AI바우처 분과) 공모",
    date: "2025-02-17",
    description: "AI 솔루션 도입을 지원하는 2025년 AI바우처 지원사업 공고입니다.",
    period: "2025년 2월 17일 ~ 2025년 4월 18일",
  },
  {
    id: 1,
    title: "2026년 일·생활균형 시스템 지원사업",
    date: "2026-02-05",
    description: "기업의 업무환경 개선을 위한 일·생활균형 시스템 지원사업 공고입니다.",
    period: "2026년 2월 5일 ~ 2026년 3월 31일",
  },
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
        {notices.map((notice) => (
          <SiteLink
            className="dw-board-row"
            to={`/government-notice/${notice.id}`}
            key={notice.id}
          >
            <span>{notice.id}</span>
            <div>
              <b>공지</b>
              <h2>{notice.title}</h2>
            </div>
            <time>{notice.date}</time>
          </SiteLink>
        ))}
      </div>
    </Shell>
  );
}

export function GovernmentNoticeDetail() {
  const { id } = useParams();
  const currentIndex = notices.findIndex((notice) => notice.id === Number(id));
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const notice = notices[safeIndex];
  const previousNotice = notices[safeIndex - 1];
  const nextNotice = notices[safeIndex + 1];

  return (
    <Shell page="government">
      <article className="dw-notice-detail">
        <header>
          <h2>{notice.title}</h2>
          <div>
            <span>등록일 {notice.date}</span>
            <span>조회수 743</span>
          </div>
        </header>
        <div className="dw-notice-body">
          <aside>
            <strong>아이원디지털웨어㈜ 공지사항</strong>
            <p>정부지원 사업 안내입니다.</p>
          </aside>
          <p>{notice.description}</p>
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
              <b>신청기간</b> {notice.period}
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
          {previousNotice ? (
            <>
              <SiteLink to={`/government-notice/${previousNotice.id}`}>
                {previousNotice.title}
              </SiteLink>
              <time>{previousNotice.date}</time>
            </>
          ) : (
            <span>이전글이 없습니다.</span>
          )}
        </p>
        <p>
          <b>다음글</b>
          {nextNotice ? (
            <>
              <SiteLink to={`/government-notice/${nextNotice.id}`}>
                {nextNotice.title}
              </SiteLink>
              <time>{nextNotice.date}</time>
            </>
          ) : (
            <span>다음글이 없습니다.</span>
          )}
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
  const navigate = useNavigate();
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setDemoAuthenticated(true);
    navigate("/mypage");
  };
  return (
    <Shell page={signup ? "signup" : "login"}>
      <div className="dw-auth-panel dw-card">
        <div
          className={`dw-auth-copy ${signup ? "dw-auth-copy-signup" : "dw-auth-copy-login"}`}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/subvisual/${signup ? "sign_bg.png" : "login_bg.png"})`,
          }}
        >
          <p>WELCOME TO</p>
          <h2>I-ONE DIGITALWARE</h2>
          <span>
            {signup
              ? "회원가입 후 고객지원 서비스를 편리하게 이용하세요."
              : "등록한 계정으로 로그인하세요."}
          </span>
        </div>
        <form onSubmit={submit}>
          {signup && <Input label="이름" required defaultValue="이윤규" />}
          <Input
            label="이메일"
            type="email"
            required
            defaultValue="demo@idigitalware.com"
          />
          <Input
            label="비밀번호"
            type="password"
            required
            defaultValue="demo1234!"
          />
          {signup && (
            <>
              <Input
                label="비밀번호 확인"
                type="password"
                required
                defaultValue="demo1234!"
              />
              <Input label="휴대폰 번호" required defaultValue="010-4029-2697" />
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

type MyPageTab = "profile" | "password" | "inquiries";

export function MyPage() {
  const navigate = useNavigate();
  const authenticated = useDemoAuth();
  const [tab, setTab] = useState<MyPageTab>("profile");
  const [member, setMember] = useState({
    name: "이윤규",
    email: "demo@idigitalware.com",
    phone: "010-4029-2697",
  });
  const [profileDraft, setProfileDraft] = useState({ name: "", phone: "" });
  const [emailDraft, setEmailDraft] = useState({ current: "", next: "" });
  const [savedMessage, setSavedMessage] = useState<"profile" | "email" | null>(null);

  useEffect(() => {
    if (!authenticated) navigate("/login", { replace: true });
  }, [authenticated, navigate]);

  if (!authenticated) return null;

  const logout = () => {
    setDemoAuthenticated(false);
    navigate("/");
  };

  return (
    <Shell page="mypage">
      <div className="dw-mypage-heading">
        <p>회원님의 계정 정보를 확인하고 관리할 수 있습니다.</p>
        <button type="button" className="dw-mypage-logout" onClick={logout}>
          로그아웃
        </button>
      </div>
      <div className="dw-mypage-layout">
        <aside className="dw-mypage-nav dw-card" aria-label="마이페이지 메뉴">
          <div className="dw-mypage-user">
            <span aria-hidden="true">{member.name.trim().charAt(0) || "이"}</span>
            <div>
              <strong>{member.name}</strong>
              <small>{member.email}</small>
            </div>
          </div>
          {([
            ["profile", "회원정보 관리"],
            ["password", "비밀번호 변경"],
            ["inquiries", "내 문의내역"],
          ] as const).map(([key, label]) => (
            <button
              type="button"
              key={key}
              className={tab === key ? "is-active" : ""}
              onClick={() => setTab(key)}
            >
              <span aria-hidden="true">{key === "profile" ? "♙" : key === "password" ? "▢" : "▤"}</span>
              {label}
            </button>
          ))}
        </aside>

        <div className="dw-mypage-main">
          {tab === "profile" && (
            <>
              <form
                className="dw-mypage-card dw-card"
                onSubmit={(event) => {
                  event.preventDefault();
                  setMember((current) => ({
                    ...current,
                    name: profileDraft.name.trim() || current.name,
                    phone: profileDraft.phone.trim() || current.phone,
                  }));
                  setSavedMessage("profile");
                }}
              >
                <header>
                  <h2>기본 정보</h2>
                  <p>회원님의 기본 정보를 확인하고 수정할 수 있습니다.</p>
                </header>
                <Input label="이메일" type="email" placeholder="ex) example@idigitalware.com" />
                <small>이메일 변경은 아래 변경 폼을 이용해주세요.</small>
                <Input
                  label="이름"
                  placeholder="ex) 이름을 입력해주세요."
                  value={profileDraft.name}
                  onChange={(name) => {
                    setProfileDraft((current) => ({ ...current, name }));
                    setSavedMessage(null);
                  }}
                />
                <Input
                  label="전화번호"
                  placeholder="ex) 010-0000-0000"
                  value={profileDraft.phone}
                  onChange={(phone) => {
                    setProfileDraft((current) => ({ ...current, phone }));
                    setSavedMessage(null);
                  }}
                />
                <button className="dw-submit" type="submit">정보 수정</button>
                {savedMessage === "profile" && (
                  <p className="dw-mypage-success" role="status">수정 반영되었습니다.</p>
                )}
              </form>
              <form
                className="dw-mypage-card dw-card"
                onSubmit={(event) => {
                  event.preventDefault();
                  const nextEmail = emailDraft.next.trim();
                  if (nextEmail) setMember((current) => ({ ...current, email: nextEmail }));
                  setEmailDraft((current) => ({ current: nextEmail || current.current, next: "" }));
                  setSavedMessage("email");
                }}
              >
                <header>
                  <h2>이메일 변경</h2>
                  <p>이메일을 변경하면 프로필의 연락처 이메일이 업데이트됩니다.</p>
                </header>
                <Input
                  label="현재 이메일"
                  type="email"
                  placeholder="ex) current@example.com"
                  value={emailDraft.current}
                  onChange={(current) => {
                    setEmailDraft((draft) => ({ ...draft, current }));
                    setSavedMessage(null);
                  }}
                />
                <Input
                  label="새 이메일"
                  type="email"
                  placeholder="ex) new@example.com"
                  value={emailDraft.next}
                  onChange={(next) => {
                    setEmailDraft((draft) => ({ ...draft, next }));
                    setSavedMessage(null);
                  }}
                />
                <button className="dw-submit dw-submit-outline" type="submit">이메일 변경</button>
                {savedMessage === "email" && (
                  <p className="dw-mypage-success" role="status">수정 반영되었습니다.</p>
                )}
              </form>
            </>
          )}
          {tab === "password" && (
            <form className="dw-mypage-card dw-card" onSubmit={(e) => e.preventDefault()}>
              <header>
                <h2>비밀번호 변경</h2>
                <p>계정 보호를 위해 새로운 비밀번호를 설정하세요.</p>
              </header>
              <Input label="현재 비밀번호" type="password" placeholder="ex) 현재 비밀번호를 입력해주세요." />
              <Input label="새 비밀번호" type="password" placeholder="ex) 새 비밀번호를 입력해주세요." />
              <Input label="새 비밀번호 확인" type="password" placeholder="ex) 새 비밀번호를 다시 입력해주세요." />
              <button className="dw-submit" type="submit">비밀번호 변경</button>
            </form>
          )}
          {tab === "inquiries" && (
            <section className="dw-mypage-card dw-card">
              <header>
                <h2>내 문의내역</h2>
                <p>접수한 문의와 답변 상태를 확인할 수 있습니다.</p>
              </header>
              <div className="dw-mypage-empty">
                <span aria-hidden="true">▤</span>
                <strong>등록된 문의내역이 없습니다.</strong>
                <SiteLink to="/customer-as">1:1 사용문의 바로가기 →</SiteLink>
              </div>
            </section>
          )}
        </div>
      </div>
    </Shell>
  );
}
