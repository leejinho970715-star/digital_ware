import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Art, SiteLink } from "./ui";
import { socialLinks } from "./config";
import { useMotion } from "./useMotion";
import Chatbot from "./Chatbot";
import "./renewal.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
    setServices(false);
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
          <SiteLink to="/government-notice">정부 지원사업</SiteLink>
          <SiteLink to="/inquiry">구입문의</SiteLink>
          <SiteLink to="/customer-as">고객센터</SiteLink>
          <SiteLink to="/about">기업소개</SiteLink>
          <div className="dw-auth">
            <SiteLink to="/login" className="dw-button">
              <Art name="imgLucideLogIn" />
              로그인
            </SiteLink>
            <SiteLink to="/signup" className="dw-button dw-button-dark">
              <Art name="imgLucideUserRoundPlus" />
              회원가입
            </SiteLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
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
            <SiteLink to="/privacy">개인정보취급방침</SiteLink>
            <SiteLink to="/terms">이용약관</SiteLink>
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
  const [collapsed, setCollapsed] = useState(false);
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
        {collapsed ? "‹" : "›"}
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
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Business Technology Integrator",
      "/si-customizing": "SI 커스터마이징",
      "/migration": "데이터 마이그레이션",
      "/pms": "PMS 솔루션",
      "/about": "기업 소개",
    };
    const previous = document.title;
    document.title = `${titles[pathname.replace(/\/$/, "") || "/"] ?? "페이지 안내"} | 아이원디지털웨어`;
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
      <Footer />
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
