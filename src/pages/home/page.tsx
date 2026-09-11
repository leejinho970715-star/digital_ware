import { type CSSProperties } from "react";
import Layout from "../../components/renewal/Layout";
import {
  Art,
  asset,
  Bubble,
  Button,
  SectionTitle,
  SiteLink,
  Sprite,
  Stats,
} from "../../components/renewal/ui";

const siCards = [
  ["맞춤형 개발", "기업 특화 프로세스"],
  ["ERP 연동", "모든 종류의 ERP 완벽 통합"],
  ["웹/앱 서비스", "다양한 플랫폼"],
  ["산업별 최적화", "공공/제조/금융"],
];
const dataCards = [
  ["무결성 보장", "데이터 손실 Zero"],
  ["체계적 검증", "다단계 검증 프로세스"],
  ["업무 연속성", "공백 최소화"],
  ["대용량 처리", "수만 건 이관"],
];
const clients = [
  ["SK임업", "FORESTRY . ESG", "imgImgi571C22402708E4B6BA360A33D15613149Sk1"],
  ["스타쉽엔터테인먼트", "ENTERTAINMENT . K-POP", "imgCostomersLogo"],
  [
    "에스엠에너지",
    "ENERGY . SOLAR",
    "imgImgi813Ea47AaB12E4Bb8B39CAb612A2Ec39DSm1",
  ],
  ["TKG 우당", "MANUFACTURING . INDUSTRY", "imgCostomersLogo1"],
  ["디자인하우스", "MEDIA . PUBLISHING", "imgCostomersLogo2"],
];

function ServiceCard({
  type,
  index,
  title,
  description,
}: {
  type: "si" | "migration";
  index: number;
  title: string;
  description: string;
}) {
  return (
    <SiteLink
      to={type === "si" ? "/si-customizing" : "/migration"}
      className="dw-card dw-service-card"
      data-reveal
    >
      <Bubble />
      <Sprite type={type} index={index} />
      <h3>{title}</h3>
      <p>{description}</p>
    </SiteLink>
  );
}

export default function Home() {
  return (
    <Layout home>
      <section
        className="dw-home-hero"
        style={{ backgroundImage: `url(${asset("home", "imgVisualBg")})` }}
      >
        <video
          className="dw-home-hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source
            src={`${import.meta.env.BASE_URL}assets/visual-video.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="dw-container">
          <div className="dw-home-hero-copy" data-reveal>
            <h1>
              Business
              <br />
              <em>Technology</em> Integrator
            </h1>
            <p>최적의 비즈니스 프로세스를 설계하는 IT 기술 파트너</p>
          </div>
          <div className="dw-actions">
            <Button to="/about">회사소개 →</Button>
            <Button dark to="/inquiry">
              문의하기 →
            </Button>
          </div>
          <div className="dw-hero-services">
            {[
              ["데이터 마이그레이션", "/migration"],
              ["SI 커스터마이징", "/si-customizing"],
              ["PMS 솔루션", "/pms"],
            ].map(([label, to], i) => (
              <SiteLink
                key={to}
                to={to}
                className="dw-card dw-hero-service"
                data-reveal
              >
                <Sprite type="hero" index={i} />
                <span>{label}</span>
              </SiteLink>
            ))}
          </div>
        </div>
      </section>
      <section className="dw-section dw-home-si">
        <Art name="imgSection1Img" className="dw-si-building" />
        <div className="dw-container dw-si-grid">
          <div className="dw-si-copy">
            <SectionTitle
              label="SI CUSTOMIZING"
              title={
                <>
                  비즈니스의 한계를 넘는 <em>맞춤형 설계</em>
                </>
              }
            >
              <p>
                단순한 시스템 구축을 넘어 기업의 고유한 비즈니스 로직을 ERP와
                완벽하게 통합합니다.
              </p>
              <p>
                풍부한 ERP 연동 경험을 바탕으로 공공, 제조, 금융 등 다양한
                산업군에 최적화된 맞춤형 웹/앱 서비스를 제공합니다.
              </p>
              <p>
                고객사의 업무 프로세스를 깊이 이해하고 최적의 기술 스택을
                선정하여,{" "}
                <strong>비즈니스 성장을 가속화하는 디지털 전환 파트너</strong>가
                되겠습니다.
              </p>
            </SectionTitle>
            <Button to="/si-customizing">자세히 보기 →</Button>
          </div>
          <div className="dw-si-cards">
            {siCards.map(([title, description], i) => (
              <ServiceCard
                key={title}
                type="si"
                index={i}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="dw-section dw-home-pms dw-tinted">
        <div className="dw-container">
          <SectionTitle
            center
            label="PMS SOLUTION"
            title={
              <>
                모든 ERP와 하나로 움직이는
                <br />
                <em>프로젝트 관리 시스템</em>
              </>
            }
          >
            <strong>모든 ERP와 실시간 데이터 동기화</strong>를 지원하는 프로젝트
            관리 전문 솔루션입니다.
            <br />
            원가관리부터 일정관리까지 프로젝트의 모든 것을 하나로 연결합니다.
          </SectionTitle>
          <div className="dw-actions dw-center-actions">
            <Button to="/pms">자세히 보기 →</Button>
          </div>
          <div className="dw-pms-showcase" data-reveal>
            <Art
              name="imgSection2Img"
              alt="ERP와 연동하는 PMS 프로젝트 관리 화면"
              className="dw-float"
            />
            {[1, 2, 3, 4].map((n) => (
              <Art
                key={n}
                name={`imgMiniBubble${n}`}
                className={`dw-orbit dw-orbit-${n}`}
              />
            ))}
          </div>
          <div className="dw-pms-benefits">
            {[
              [
                "실시간 연동",
                "모든 ERP와 실시간으로 데이터를 동기화하여 원가부터 일정까지 빈틈없는 통합 관리를 제공합니다.",
              ],
              [
                "시각화 관리",
                "프로젝트 전 과정을 직관적으로 시각화하여 휴먼 에러를 방지하고 의사결정을 지원합니다.",
              ],
              [
                "수익성 극대화",
                "일정, 인력, 원가를 통합 관리하여 기업의 수익성과 자원 관리 효율을 극대화합니다.",
              ],
            ].map(([title, description], i) => (
              <article className="dw-card dw-benefit" key={title} data-reveal>
                <Sprite type="pms" index={i} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Bubble />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="dw-section dw-home-data dw-wave"
        style={
          {
            "--wave": `url(${asset("home", "imgSection3BgImg")})`,
          } as CSSProperties
        }
      >
        <div className="dw-container">
          <SectionTitle
            label="DATA MIGRATION"
            title={
              <>
                데이터의 가치를 잇는 <em>무결성 이관 기술</em>
              </>
            }
          >
            <p>수만 건의 데이터도 데이터 손실 없이 완벽하게 이관합니다.</p>
            <p>
              체계적인 검증 프로세스와 고도화된 이관 툴을 활용하여 시스템 교체
              시 발생하는 업무 공백을 최소화하고 데이터의 연속성을 보장합니다.
            </p>
          </SectionTitle>
          <Button to="/migration">자세히 보기 →</Button>
          <div className="dw-data-cards">
            {dataCards.map(([title, description], i) => (
              <ServiceCard
                key={title}
                type="migration"
                index={i}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="dw-section dw-government">
        <div className="dw-container dw-government-grid">
          <SectionTitle label="NATIONAL SUBSIDIES" title="정부 지원사업">
            기업의 인재육성과 기술우위 확보를 위한 지원으로 기업 성장을 돕고
            서비스 품질을 고도화 함으로써{" "}
            <strong>함께 성장하는 디지털 미래 개척에 기여합니다.</strong>
          </SectionTitle>
          <article className="dw-card dw-government-feature" data-reveal>
            <p className="dw-eyebrow">Government Support</p>
            <h3>정부지원 공지사항</h3>
            <p>
              아이원디지털웨어㈜의
              <br />
              정부지원사업 공지사항을 확인하세요.
            </p>
            <Button to="/government-notice">전체 공지 보기 →</Button>
            <Art name="imgImage" />
          </article>
          <article className="dw-card dw-notices" data-reveal>
            <p className="dw-eyebrow">NOTICE</p>
            <h3>최신 공지사항</h3>
            <div className="dw-notice-list">
              {[
                ["2026 클라우드 정부지원 사업", "2026-04-02"],
                ["2025년 AI바우처 지원사업(AI바우처 분과) 공모", "2025-02-17"],
                ["2026 인천 기초형 스마트공장 구축 지원사업", "2026-03-20"],
                [
                  "2026년도 중소기업 클라우드 서비스 보급 확산사업 공고",
                  "2026-02-24",
                ],
                ["2026년 일·생활균형 시스템 지원사업", "2026-02-05"],
              ].map(([title, date]) => (
                <SiteLink key={title} to="/government-notice">
                  <span>공지</span>
                  <p>{title}</p>
                  <time dateTime={date}>{date}</time>
                </SiteLink>
              ))}
            </div>
            <Button to="/government-notice">더보기 →</Button>
          </article>
          {[
            [
              "smart factory",
              "스마트공장",
              "제조업체 대상 스마트공장 구축 지원",
              "imgIcon2",
            ],
            [
              "Other support",
              "기타 지원사업",
              "솔루션 연동 자동화 장비, 제어기 지원",
              "imgIcon3",
            ],
          ].map(([label, title, copy, img]) => (
            <SiteLink
              to="/government-notice"
              className="dw-card dw-government-small"
              key={title}
              data-reveal
            >
              <p className="dw-eyebrow">{label}</p>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Art name={img} />
            </SiteLink>
          ))}
        </div>
      </section>
      <section
        className="dw-section dw-home-about dw-wave"
        style={
          {
            "--wave": `url(${asset("home", "imgSection5BgImg")})`,
          } as CSSProperties
        }
      >
        <div className="dw-container dw-about-grid">
          <div>
            <SectionTitle
              label="I-ONE DIGITALWARE"
              title="기술의 깊이가 비즈니스의 높이를 결정합니다"
            >
              <p>
                아이원디지털웨어는 특정 플랫폼에 종속되지 않는 독립적인 기술력을
                통해,
                <br />
                귀사의 성장을 가로막는 IT 장벽을 허물어 드리겠습니다.
              </p>
              <p>
                데이터가 흐르고 시스템이 유기적으로 연결되는 스마트한 업무 환경,
                아이원디지털웨어가 함께 만듭니다.
              </p>
            </SectionTitle>
            <Button to="/about">회사 소개 →</Button>
            <Stats
              items={[
                {
                  value: "3대",
                  count: 3,
                  suffix: "대",
                  label: "핵심 사업 영역",
                },
                {
                  value: "5,000+",
                  count: 5000,
                  suffix: "+",
                  label: "구축 고객사",
                },
                {
                  value: "99.9%",
                  count: 99.9,
                  suffix: "%",
                  label: "고객 만족도",
                },
                { value: "24/7", label: "고객 지원" },
              ]}
            />
          </div>
          <Art
            name="imgSection5Img"
            alt="기업 성장과 기술 혁신 일러스트"
            className="dw-float"
          />
        </div>
      </section>
      <section className="dw-section dw-clients">
        <div className="dw-container">
          <SectionTitle label="CLIENT STORY" title="고객스토리">
            아이원디지털웨어의 대표 구축 고객사입니다. 국내 5,000여 개 기업이
            선택한 검증된 IT 서비스 파트너로서, 다양한 산업군에서 축적된 구축
            경험과 기술 노하우를 바탕으로 고객 맞춤형 솔루션을 제공하고
            있습니다.
          </SectionTitle>
          <div className="dw-review-grid">
            {[
              [
                "시스템 통합 프로젝트",
                "ERP 커스터마이징부터 마이그레이션까지 전 과정을 체계적으로 관리해주셔서 큰 도움이 되었습니다. 특히 데이터 무결성 이관 기술에 감탄했습니다.",
                "SK 임업 IT 담당자",
              ],
              [
                "PMS 솔루션 도입",
                "PMS 도입 이후 프로젝트 원가 관리와 일정 관리가 훨씬 수월해졌습니다. 실시간 ERP 연동 덕분에 데이터 이중 입력도 사라졌고요.",
                "TKG 우당 경영지원팀",
              ],
              [
                "데이터 마이그레이션 프로젝트",
                "데이터 마이그레이션 과정에서 Auto Split Engine과 Smart Sanitization 기능 덕분에 예상보다 훨씬 빠르게 시스템 전환을 완료할 수 있었습니다.",
                "SM 에너지 IT 기획팀",
              ],
            ].map(([title, quote, by]) => (
              <figure className="dw-card dw-review" key={title} data-reveal>
                <p className="dw-stars" aria-label="별 5개">
                  ★★★★★
                </p>
                <h3>{title}</h3>
                <blockquote>“{quote}”</blockquote>
                <figcaption>{by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="dw-client-marquee" aria-label="주요 고객사">
          <div className="dw-client-strip">
            {[...clients, ...clients].map(([name, industry, img], index) => (
              <article
                className="dw-card dw-client"
                key={`${name}-${index}`}
                aria-hidden={index >= clients.length}
              >
                <Art name={img} alt={index < clients.length ? name : ""} />
                <div>
                  <h3>{name}</h3>
                  <p>{industry}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
