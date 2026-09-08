import Layout from "../../components/renewal/Layout";
import {
  Art,
  Contact,
  Process,
  SectionTitle,
  Stats,
  SubHero,
  TextCard,
  Bubble,
} from "../../components/renewal/ui";

export default function SI() {
  return (
    <Layout>
      <SubHero
        page="si"
        title="비즈니스에 최적화된"
        accent="맞춤형 시스템 구축"
      >
        단순 개발 대행이 아닙니다.
        <br />
        고객사의 실제 업무 프로세스를 깊이 있게 분석하여,
        <br />
        현업에서 즉시 활용 가능한 최적의 시스템을 구축합니다.
      </SubHero>
      <section className="dw-section">
        <div className="dw-container">
          <SectionTitle label="SI 개발" title="체계적인 SI 개발 서비스 범위">
            요구사항 분석부터 시스템 안정화까지,
            <br />
            성공적인 프로젝트 완수를 위한 전 과정을 책임집니다.
          </SectionTitle>
          <div className="dw-grid dw-grid-3">
            {[
              [
                "업무 분석 및 컨설팅",
                "고객사의 업무 현황과 프로세스를 심층 분석하고, 시스템 도입 목적 및 개선 방향을 도출하여 명확한 요구사항을 정의합니다.",
              ],
              [
                "시스템 설계",
                "사용자 편의성을 고려한 UI/UX 설계부터 데이터베이스 모델링, 시스템 아키텍처 설계까지 안정적인 구축을 위한 청사진을 제공합니다.",
              ],
              [
                "맞춤형 개발",
                "웹 기반의 업무 시스템 개발은 물론, 기업 환경에 맞는 커스터마이징을 통해 현업 부서가 가장 효율적으로 사용할 수 있는 기능을 구현합니다.",
              ],
              [
                "시스템 연동 (Interface)",
                "기존에 사용 중인 ERP, 그룹웨어, 회계 시스템 등 내/외부 시스템과의 안정적인 데이터 연동(API 등)을 통해 정보의 사일로(Silo) 현상을 해소합니다.",
              ],
              [
                "데이터 이관 및 안정화",
                "구 시스템의 데이터를 신규 시스템으로 안전하게 이관하며, 오픈 후 안정화 기간을 통해 시스템이 현업에 성공적으로 안착하도록 지원합니다.",
              ],
              [
                "유지보수 및 확장",
                "시스템 오픈 이후에도 안정적인 운영을 지원하며, 비즈니스 변화와 확장에 유연하게 대응할 수 있는 지속적인 유지보수 체계를 제안합니다.",
              ],
            ].map(([title, copy]) => (
              <TextCard key={title} title={title}>
                {copy}
              </TextCard>
            ))}
          </div>
        </div>
      </section>
      <section className="dw-section dw-tinted">
        <div className="dw-container dw-split">
          <div>
            <SectionTitle
              label="강점 및 추천 기업"
              title="아이원디지털웨어의 개발 강점"
            />
            <ol className="dw-strengths">
              {[
                [
                  "현업 중심의 커뮤니케이션",
                  "IT 용어가 아닌 비즈니스 언어로 소통하며, 개발자의 관점이 아닌 사용자의 관점에서 시스템을 설계합니다.",
                ],
                [
                  "레거시 시스템 연동 전문성",
                  "다양한 ERP 및 내부 시스템과의 연동 경험을 바탕으로, 데이터 정합성이 보장되는 안정적인 통합 환경을 구축합니다.",
                ],
                [
                  "PMS & 마이그레이션 연계",
                  "자사 보유 솔루션(PMS, ETL)과의 유기적인 결합을 통해, 단순 개발 이상의 시너지 효과를 창출할 수 있습니다.",
                ],
              ].map(([title, copy], i) => (
                <li key={title} data-reveal>
                  <span>{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <article className="dw-card dw-recommend" data-reveal>
            <Bubble />
            <h3>이런 기업에 추천합니다</h3>
            <ul>
              {[
                "기성 솔루션(Package)으로는 우리 회사의 고유 업무를 100% 소화하기 힘든 기업",
                "ERP 도입 후, 현업 부서의 요구사항에 맞는 추가 기능 개발(Extended ERP)이 필요한 기업",
                "엑셀이나 수작업으로 관리하던 반복 업무를 시스템화하여 효율을 높이고 싶은 기업",
                "노후화된 시스템을 최신 웹 환경으로 고도화(Re-engineering)하고 싶은 기업",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <Process page="si" />
      <section className="dw-section dw-results">
        <div className="dw-container dw-split">
          <div>
            <SectionTitle label="효과" title="도입 효과">
              SI 개발 도입으로 얻을 수 있는 효과
            </SectionTitle>
            <Stats
              items={[
                {
                  value: "40%",
                  count: 40,
                  suffix: "%",
                  label: "업무 효율성 향상",
                },
                {
                  value: "100%",
                  count: 100,
                  suffix: "%",
                  label: "맞춤형 프로세스 구현",
                },
                { value: "실시간", label: "ERP 데이터 연동" },
              ]}
            />
          </div>
          <Art
            page="si"
            name="imgSection4Img"
            alt="ERP를 중심으로 연결된 업무 시스템"
            className="dw-result-art dw-float"
          />
        </div>
      </section>
      <Contact page="si" />
    </Layout>
  );
}
