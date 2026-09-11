import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Art, SiteLink } from "./ui";
import { socialLinks } from "./config";
import { useMotion } from "./useMotion";
import Chatbot from "./Chatbot";
import LegalModal, { type LegalKind } from "./LegalModal";
import { setDemoAuthenticated, useDemoAuth } from "./auth";
import "./renewal.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [submenu, setSubmenu] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const authenticated = useDemoAuth();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
    setServices(false);
    setSubmenu("");
  }, [location.pathname]);
  return (
    <header
      className="dw-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          setServices(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="dw-container dw-header-inner">
        <SiteLink to="/" className="dw-logo" aria-label="아이원디지털웨어 홈">
          <Art name="imgLogo" eager />
        </SiteLink>
        <button
          ref={menuButton}
          className="dw-menu-toggle"
          aria-expanded={open}
          aria-controls="dw-navigation"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="dw-navigation"
          className={open ? "dw-nav dw-nav-open" : "dw-nav"}
          aria-label="주 메뉴"
        >
          <div
            className="dw-service-menu"
            onMouseEnter={() => {
              if (window.innerWidth > 900) setServices(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 900) setServices(false);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setServices(false);
            }}
          >
            <button
              aria-expanded={services}
              aria-controls="dw-service-links"
              onClick={() => setServices(!services)}
            >
              제품/서비스
            </button>
            <div
              id="dw-service-links"
              className="dw-dropdown"
              hidden={!services}
            >
              <SiteLink to="/si-customizing">SI 커스터마이징</SiteLink>
              <SiteLink to="/migration">데이터 마이그레이션</SiteLink>
              <SiteLink to="/pms">PMS 솔루션</SiteLink>
            </div>
          </div>
          {[
            ["정부 지원사업", "support", [["공지사항", "/government-notice"]]],
            [
              "구입 및 제휴문의",
              "inquiry",
              [
                ["제품/서비스 구매상담", "/inquiry"],
                ["비즈니스 제휴 문의", "/business-inquiry"],
              ],
            ],
            ["고객센터", "customer", [["1:1 사용문의", "/customer-as"]]],
            [
              "기업소개",
              "about",
              [
                ["기업소개", "/about"],
                ["오시는 길", "/location"],
              ],
            ],
          ].map(([title, key, links]) => (
            <div
              className="dw-service-menu"
              key={String(key)}
              onMouseEnter={() =>
                window.innerWidth > 900 && setSubmenu(String(key))
              }
              onMouseLeave={() => window.innerWidth > 900 && setSubmenu("")}
            >
              <button
                aria-expanded={submenu === key}
                onClick={() => setSubmenu(submenu === key ? "" : String(key))}
              >
                {String(title)}
              </button>
              <div className="dw-dropdown" hidden={submenu !== key}>
                {(links as string[][]).map(([label, to]) => (
                  <SiteLink to={to} key={to}>
                    {label}
                  </SiteLink>
                ))}
              </div>
            </div>
          ))}
          <div className="dw-auth dw-auth-mobile">
            {authenticated ? (
              <>
                <SiteLink to="/mypage" className="dw-button">
                  <Art name="imgLucideUserRoundPlus" />
                  마이페이지
                </SiteLink>
                <button
                  type="button"
                  className="dw-button dw-button-dark"
                  onClick={() => {
                    setDemoAuthenticated(false);
                    navigate("/");
                  }}
                >
                  <Art name="imgLucideLogIn" />
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <SiteLink to="/login" className="dw-button">
                  <Art name="imgLucideLogIn" />
                  로그인
                </SiteLink>
                <SiteLink to="/signup" className="dw-button dw-button-dark">
                  <Art name="imgLucideUserRoundPlus" />
                  회원가입
                </SiteLink>
              </>
            )}
          </div>
        </nav>
        <div className="dw-auth dw-auth-desktop">
          {authenticated ? (
            <>
              <SiteLink to="/mypage" className="dw-button">
                <Art name="imgLucideUserRoundPlus" />
                마이페이지
              </SiteLink>
              <button
                type="button"
                className="dw-button dw-button-dark"
                onClick={() => {
                  setDemoAuthenticated(false);
                  navigate("/");
                }}
              >
                <Art name="imgLucideLogIn" />
                로그아웃
              </button>
            </>
          ) : (
            <>
              <SiteLink to="/login" className="dw-button">
                <Art name="imgLucideLogIn" />
                로그인
              </SiteLink>
              <SiteLink to="/signup" className="dw-button dw-button-dark">
                <Art name="imgLucideUserRoundPlus" />
                회원가입
              </SiteLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Footer({ onLegal }: { onLegal: (kind: LegalKind) => void }) {
  return (
    <footer className="dw-footer">
      <div className="dw-container">
        <div className="dw-footer-top">
          <div className="dw-footer-brand">
            <SiteLink
              to="/"
              className="dw-logo dw-logo-white"
              aria-label="아이원디지털웨어 홈"
            >
              <Art name="imgWhiteLogo" />
            </SiteLink>
            <p>
              클라우드, 모바일, 전자금융 등 최첨단 기술로 기업의 성장을
              지원합니다.
            </p>
          </div>
          <div>
            <h3>제품/서비스</h3>
            <SiteLink to="/si-customizing">SI 커스터마이징</SiteLink>
            <SiteLink to="/migration">마이그레이션</SiteLink>
            <SiteLink to="/pms">PMS 서비스</SiteLink>
          </div>
          <div>
            <h3>고객지원</h3>
            <SiteLink to="/government-notice">공지사항</SiteLink>
            <SiteLink to="/customer-as">1:1 사용문의</SiteLink>
            <SiteLink to="/customer-as">원격지원</SiteLink>
          </div>
          <div>
            <h3>문의</h3>
            <a href="tel:07044973634">구매상담: 070-4497-3634</a>
            <a href="tel:18771859">고객센터: 1877-1859</a>
            <p>평일 09:00~18:00</p>
          </div>
        </div>
        <div className="dw-footer-bottom">
          <div className="dw-footer-links">
            <button onClick={() => onLegal("privacy")}>개인정보취급방침</button>
            <button onClick={() => onLegal("terms")}>이용약관</button>
            <SiteLink to="/location">오시는 길</SiteLink>
          </div>
          <div className="dw-socials">
            {socialLinks.map(([name, url, icon]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Art name={icon} />
              </a>
            ))}
          </div>
          <div className="dw-company-details">
            <p>
              아이원디지털웨어㈜ | 대표: 황명희 | 사업자등록번호: 113-86-70956 |
              통신판매신고번호: 2017-서울구로-0617
            </p>
            <p>주소: 서울특별시 구로구 디지털로 285 에이스트윈타워 1차 405호</p>
            <p className="dw-copyright">
              COPYRIGHT © 2024 아이원디지털웨어. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function QuickMenu() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside
      className={`dw-quick ${collapsed ? "dw-quick-collapsed" : ""}`}
      aria-label="빠른 상담"
    >
      <button
        className="dw-quick-toggle"
        aria-expanded={!collapsed}
        aria-controls="dw-quick-links"
        aria-label={collapsed ? "빠른 상담 펼치기" : "빠른 상담 접기"}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span>{collapsed ? "+" : "×"}</span>
        QUICK MENU
      </button>
      <div id="dw-quick-links" hidden={collapsed}>
        <p>아이원디지털웨어</p>
        {[
          ["무료방문 신청", "imgCompany", "/inquiry"],
          ["PMS 체험 신청하기", "imgWorkstation", "/inquiry?service=pms"],
          ["카드뉴스 신청하기", "imgNews1", "https://pf.kakao.com/_xnFVzK"],
          ["전화문의", "imgCall", "tel:07044973634"],
          ["온라인문의", "imgHeadset", "/inquiry"],
        ].map(([label, icon, to]) => (
          <SiteLink key={label} to={to}>
            <span>
              <Art name={icon} />
            </span>
            {label}
          </SiteLink>
        ))}
      </div>
    </aside>
  );
}

export default function Layout({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [legal, setLegal] = useState<LegalKind | null>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Business Technology Integrator",
      "/si-customizing": "SI 커스터마이징",
      "/migration": "데이터 마이그레이션",
      "/pms": "PMS 솔루션",
      "/about": "기업 소개",
      "/government-notice": "정부지원사업 공지사항",
      "/inquiry": "제품/서비스 구매상담",
      "/business-inquiry": "비즈니스 제휴 문의",
      "/customer-as": "1:1 사용문의",
      "/location": "오시는 길",
      "/login": "로그인",
      "/signup": "회원가입",
      "/mypage": "마이페이지",
    };
    const previous = document.title;
    const cleanPath = pathname.replace(/\/$/, "") || "/";
    const pageTitle = cleanPath.startsWith("/government-notice/")
      ? "정부지원사업 공지사항"
      : (titles[cleanPath] ?? "페이지 안내");
    document.title = `${pageTitle} | 아이원디지털웨어`;
    return () => {
      document.title = previous;
    };
  }, [pathname]);
  useMotion(root);
  return (
    <div className="dw-renewal" ref={root}>
      <a className="dw-skip" href="#dw-main">
        본문 바로가기
      </a>
      <Header />
      <main id="dw-main" tabIndex={-1}>
        {children}
      </main>
      {home && <QuickMenu />}
      <Chatbot />
      <Footer onLegal={setLegal} />
      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
      <button
        className="dw-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          })
        }
        aria-label="맨 위로"
      >
        ↑
      </button>
    </div>
  );
}
