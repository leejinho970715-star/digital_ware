import { type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import assetMap from "./asset-map.json";
import { contactPhone, legacyOrigin, serviceRoutes } from "./config";

export type PageKey = keyof typeof assetMap;
export const asset = (page: PageKey, name: string) =>
  `${import.meta.env.BASE_URL}${(assetMap[page] as Record<string, string>)[name]}`;

export function SiteLink({
  to,
  children,
  className = "",
  ...props
}: {
  to: string;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  if (
    to === "/" ||
    serviceRoutes.includes(to) ||
    (!legacyOrigin && to.startsWith("/"))
  )
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  return (
    <a
      href={to.startsWith("/") ? `${legacyOrigin}${to}` : to}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
export function Button({
  to,
  children,
  dark = false,
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <SiteLink
      to={to}
      className={`dw-button ${dark ? "dw-button-dark" : ""}`}
      data-button
    >
      {children}
    </SiteLink>
  );
}
export function Art({
  page = "home",
  name,
  alt = "",
  className = "",
  eager = false,
  style,
}: {
  page?: PageKey;
  name: string;
  alt?: string;
  className?: string;
  eager?: boolean;
  style?: CSSProperties;
}) {
  return (
    <img
      src={asset(page, name)}
      alt={alt}
      className={`dw-art ${className}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={style}
    />
  );
}
export function Bubble() {
  return <Art name="imgMiniBubble" className="dw-card-bubble" />;
}
export function SectionTitle({
  label,
  title,
  children,
  center = false,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`dw-section-title ${center ? "dw-center" : ""}`}
      data-reveal
    >
      <p className="dw-eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <div className="dw-description">{children}</div>}
    </div>
  );
}
export function TextCard({
  title,
  children,
  label,
  className = "",
}: {
  title: string;
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <article className={`dw-card dw-text-card ${className}`} data-reveal>
      <Bubble />
      {label && <p className="dw-eyebrow">{label}</p>}
      <h3>{title}</h3>
      <div className="dw-description">{children}</div>
    </article>
  );
}
export function Sprite({
  type,
  index,
  className = "",
}: {
  type: "hero" | "si" | "pms" | "migration";
  index: number;
  className?: string;
}) {
  const maps = {
    hero: {
      name: "imgDataIconImg",
      width: [291.12, 325.83, 292.86],
      height: [100, 100, 100],
      left: [0.89, -113.58, -191.96],
      top: [0, 0, 0],
    },
    si: {
      name: "imgImg",
      width: [375.34, 401.08, 386.5, 369.1],
      height: [116.93, 119.3, 100.09, 100.09],
      left: [0, -103.61, -287.15, -180.73],
      top: [-16.88, -16.13, -0.05, -0.05],
    },
    pms: {
      name: "imgIcon",
      width: [391.88, 359.31, 331.75],
      height: [125.53, 125.53, 125.53],
      left: [-18.91, -247.42, -118.92],
      top: [-10.51, -10.51, -10.51],
    },
    migration: {
      name: "imgIcon1",
      width: [399.22, 388.55, 446.49, 448.46],
      height: [167.4, 167.4, 167.4, 167.4],
      left: [0, -96.18, -225.44, -337],
      top: [-31.51, -31.51, -31.51, -31.51],
    },
  }[type];
  return (
    <span
      className={`dw-sprite dw-sprite-${type} ${className}`}
      aria-hidden="true"
    >
      <Art
        name={maps.name}
        style={{
          width: `${maps.width[index]}%`,
          height: `${maps.height[index]}%`,
          left: `${maps.left[index]}%`,
          top: `${maps.top[index]}%`,
        }}
      />
    </span>
  );
}
export function Stats({
  items,
}: {
  items: { value: string; label: string; count?: number; suffix?: string }[];
}) {
  return (
    <div className="dw-stats" data-reveal>
      {items.map((item) => (
        <div key={item.label}>
          <strong aria-label={item.value}>
            <span
              aria-hidden="true"
              data-count={item.count}
              data-suffix={item.suffix ?? ""}
            >
              {item.value}
            </span>
          </strong>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
export function SubHero({
  page,
  title,
  accent,
  children,
}: {
  page: Exclude<PageKey, "home">;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section
      className="dw-sub-hero"
      style={{ backgroundImage: `url(${asset(page, "imgVisualBg")})` }}
    >
      <div className="dw-container dw-hero-grid">
        <div className="dw-hero-copy" data-reveal>
          <h1>
            {title}
            <br />
            <em>{accent}</em>
          </h1>
          <p>{children}</p>
        </div>
        <div className="dw-hero-art" data-reveal>
          <Art
            page={page}
            name={page === "migration" ? "imgDataVisualImg" : "imgSiVisualImg"}
            alt={`${accent} 서비스 일러스트`}
            className="dw-float"
            eager
          />
        </div>
      </div>
    </section>
  );
}
export function Process({ page }: { page: "si" | "migration" }) {
  const titles =
    page === "si"
      ? [
          "요구사항 분석",
          "설계 및 기획",
          "개발 및 구축",
          "테스트 및 검증",
          "배포 및 운영",
        ]
      : [
          "현황 분석",
          "이관 계획 수립",
          "테스트 이관",
          "본 이관 실행",
          "검증 및 안정화",
        ];
  return (
    <section
      className="dw-section dw-process dw-wave"
      style={
        { "--wave": `url(${asset(page, "imgSection3BgImg")})` } as CSSProperties
      }
    >
      <div className="dw-container">
        <SectionTitle
          label="PROCESS"
          title={page === "si" ? "개발 프로세스" : "마이그레이션 프로세스"}
        >
          {page === "si"
            ? "체계적인 프로세스를 통해 고품질의 맞춤형 솔루션을 제공합니다."
            : "체계적인 프로세스를 통해 안전하고 정확한 데이터 이관을 수행합니다."}
        </SectionTitle>
        <ol className="dw-process-grid">
          {titles.map((title, i) => (
            <li className="dw-card dw-process-card" key={title} data-reveal>
              <Art
                page={page}
                name={
                  i === 4 && page === "si"
                    ? "imgStep03Icon1"
                    : `imgStep0${i + 1}Icon`
                }
              />
              <p>STEP {String(i + 1).padStart(2, "0")}</p>
              <h3>{title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function Contact({ page }: { page: Exclude<PageKey, "home"> }) {
  const title =
    page === "si"
      ? "SI 개발"
      : page === "migration"
        ? "데이터 마이그레이션"
        : "PMS";
  return (
    <section
      className="dw-contact"
      style={{ backgroundImage: `url(${asset(page, "imgBg")})` }}
    >
      <Art page={page} name="imgBgAssets" className="dw-contact-orb dw-float" />
      <div className="dw-container dw-center" data-reveal>
        <h2>{title} 도입 문의</h2>
        <p>
          {page === "si"
            ? "맞춤형 시스템 구축이 필요하신가요?"
            : page === "migration"
              ? "안전한 데이터 이관이 필요하신가요?"
              : "프로젝트 관리의 효율성을 높이고 싶으신가요?"}
          <br />
          전문 상담사가 귀사에 최적화된{" "}
          {page === "migration" ? "이관 계획" : "솔루션"}을 제안해드립니다.
        </p>
        <div className="dw-actions">
          <Button to={`tel:${contactPhone}`}>전화 상담 : {contactPhone}</Button>
          <Button dark to="/inquiry">
            온라인 문의하기 →
          </Button>
        </div>
      </div>
    </section>
  );
}
