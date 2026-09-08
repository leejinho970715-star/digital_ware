import type { CSSProperties, ReactNode } from "react";
import Layout from "../../components/renewal/Layout";
import {
  Art,
  PageBreadcrumb,
  SectionTitle,
  SiteLink,
  asset,
} from "../../components/renewal/ui";

const strengths: {
  label: string;
  title: string;
  copy: ReactNode;
  image: string;
  reverse?: boolean;
}[] = [
  {
    label: "ABOUT US",
    title: "기업 정보화 시스템 구축의 핵심 기술력",
    copy: (
      <>
        아이원디지털웨어는 기업 정보화 시스템 구축에 필요한 핵심 기술력을
        바탕으로, 고객의 비즈니스 환경에 최적화된 IT 솔루션을 제공합니다.
      </>
    ),
    image: "imgCompany1",
  },
  {
    label: "CORE BUSINESS",
    title: "3대 핵심 사업 영역으로 디지털 경쟁력을 더하다.",
    copy: (
      <>
        <p>
          우리는 획일화된 패키지 소프트웨어가 해결하지 못하는 기업 고유의 업무
          프로세스를 기술로 풀어냅니다.
        </p>
        <ul>
          <li>기업 맞춤형 SI 및 커스터마이징</li>
          <li>통합 프로젝트 관리 시스템(PMS)</li>
          <li>데이터 마이그레이션 및 시스템 연동</li>
        </ul>
      </>
    ),
    image: "imgCompany2",
    reverse: true,
  },
  {
    label: "TECHNOLOGY PARTNER",
    title: "특정 플랫폼에 종속되지 않는 독립적인 기술력",
    copy: (
      <>
        <p>
          아이원디지털웨어는 특정 플랫폼에 종속되지 않는 독립적인 기술력을 통해,
          귀사의 성장을 가로막는 IT 장벽을 허물어 드리겠습니다.
        </p>
        <p>
          데이터가 흐르고 시스템이 유기적으로 연결되는 스마트한 업무 환경,
          아이원디지털웨어가 함께 만듭니다.
        </p>
      </>
    ),
    image: "imgCompany3",
  },
];

function ServiceIcon({ index }: { index: number }) {
  const styles = [
    { width: "291.12%", left: "0.89%" },
    { width: "325.83%", left: "-113.58%" },
    { width: "292.86%", left: "-191.96%" },
  ];
  return (
    <span className="dw-about-service-icon" aria-hidden="true">
      <Art page="about" name="imgDataIconImg" style={styles[index]} />
    </span>
  );
}

export default function About() {
  return (
    <Layout>
      <section
        className="dw-about-hero"
        style={
          {
            "--about-hero": `url(${asset("about", "imgVisualBg")})`,
          } as CSSProperties
        }
      >
        <div className="dw-container dw-about-hero-grid">
          <div className="dw-about-hero-copy" data-reveal>
            <h1>기업 소개</h1>
            <p>Business Technology Integrator, I-One Digitalware</p>
          </div>
          <Art
            page="about"
            name="imgCompanyVisualImg"
            alt="아이원디지털웨어의 통합 비즈니스 기술 환경"
            className="dw-about-hero-art dw-float"
            eager
          />
        </div>
      </section>
      <PageBreadcrumb items={["기업소개", "기업 소개"]} />

      <section
        className="dw-about-story"
        style={
          {
            "--about-story": `url(${asset("about", "imgBg")})`,
          } as CSSProperties
        }
      >
        <div className="dw-container">
          <SectionTitle
            label="아이원디지털웨어 소개"
            title="최적의 비즈니스 프로세스를 설계하는 IT 기술 파트너"
          >
            기업 고유의 업무 프로세스를 기술로 풀어냅니다.
          </SectionTitle>

          <div className="dw-about-strengths">
            {strengths.map((item) => (
              <article
                className={`dw-about-strength ${item.reverse ? "dw-about-strength-reverse" : ""}`}
                key={item.label}
              >
                <div className="dw-about-visual" data-reveal>
                  <Art
                    page="about"
                    name={item.image}
                    alt=""
                    className="dw-float"
                  />
                  <Art
                    page="about"
                    name="imgEffect"
                    className="dw-about-effect dw-orbit"
                  />
                </div>
                <div className="dw-about-copy" data-reveal>
                  <p className="dw-eyebrow">{item.label}</p>
                  <h2>{item.title}</h2>
                  <div className="dw-description">{item.copy}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="dw-about-services"
        style={
          {
            "--about-services": `url(${asset("about", "imgBg1")})`,
          } as CSSProperties
        }
      >
        <div className="dw-about-bubbles" aria-hidden="true">
          {[
            "imgMiniBubble",
            "imgMiniBubble1",
            "imgMiniBubble2",
            "imgMiniBubble3",
            "imgMiniBubble",
            "imgMiniBubble1",
          ].map((name, index) => (
            <Art
              page="about"
              name={name}
              className="dw-orbit"
              key={`${name}-${index}`}
            />
          ))}
        </div>
        <Art
          page="about"
          name="imgBgAssets"
          className="dw-about-services-orb dw-float"
        />
        <div className="dw-container dw-center">
          <div className="dw-about-services-copy" data-reveal>
            <h2>“기술의 깊이가 비즈니스의 높이를 결정합니다”</h2>
            <p>
              고객사가 시스템의 제약 없이 비즈니스 본질에 집중할 수 있도록
              <br />
              디지털 경쟁력을 더해드립니다.
            </p>
          </div>
          <div className="dw-about-service-grid">
            {[
              ["데이터 마이그레이션", "/migration"],
              ["SI 커스터마이징", "/si-customizing"],
              ["PMS 솔루션", "/pms"],
            ].map(([title, to], index) => (
              <SiteLink
                className="dw-card dw-about-service-card"
                to={to}
                key={title}
                data-reveal
              >
                <ServiceIcon index={index} />
                <span>{title}</span>
              </SiteLink>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
