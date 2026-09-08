import { type CSSProperties } from "react";
import Layout from "../../components/renewal/Layout";
import {
  Art,
  asset,
  Bubble,
  Contact,
  PageBreadcrumb,
  Process,
  SectionTitle,
  Stats,
  SubHero,
  TextCard,
} from "../../components/renewal/ui";

export default function Migration() {
  return (
    <Layout>
      <SubHero
        page="migration"
        title="데이터 이관의 새로운 기준,"
        accent="지능형 ETL 솔루션"
      >
        “단순한 데이터 이동이 아닙니다.”
        <br />
        “귀사의 10년 회계 역사를 완벽하게 자산화해 드립니다.”
        <br />
        기간 제한 없는 무결점 마이그레이션을 경험하세요.
      </SubHero>
      <PageBreadcrumb items={["제품/서비스", "데이터 마이그레이션"]} />
      <section className="dw-section">
        <div className="dw-container">
          <SectionTitle
            label="Amaranth 10 도입 성공의 열쇠"
            title="차세대 ERP 도입, 가장 큰 고민은 ‘데이터’입니다."
          >
            많은 기업들이 마이그레이션 리스크 때문에 도입을 망설입니다.
          </SectionTitle>
          <div className="dw-grid dw-grid-4">
            {[
              [
                "과거 데이터 단절",
                "“표준 방식의 한계로 최근 3년 데이터만 이관되어 업무 단절 발생”",
              ],
              [
                "이관 시 업무 공백 발생",
                "“수작업 데이터 정제 및 검증으로 인해 마이그레이션 기간이 길어져 업무 공백 우려”",
              ],
              [
                "수작업 매핑의 공포",
                "“수십만 건의 전표를 엑셀로 일일이 매핑하다가 금액이 1원이라도 틀어지면 그 책임은 누가 집니까?”",
              ],
              [
                "호환성 문제 (타사 이관 불가)",
                "“기존에는 더존 ERP 간 데이터 이동만 가능하며, 영림원 등 타사 ERP에서의 이관은 불가능했습니다.”",
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
              label="LIMITATIONS vs SOLUTION"
              title="표준의 한계를 뛰어넘다"
            />
            <div className="dw-unlimited" data-reveal>
              {[
                [
                  "기간 무제한 (All Years)",
                  "최근 3년 제약 없이 10년, 20년 전 데이터도 이관",
                  "imgCertificate",
                ],
                [
                  "용량 무제한 (Big Data)",
                  "기수당 25만 건 초과 데이터도 최적화 처리",
                  "imgWarranty",
                ],
              ].map(([title, copy, img]) => (
                <div key={title}>
                  <Art page="migration" name={img} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <article className="dw-card dw-comparison" data-reveal>
            <Bubble />
            <h3>이관 가능 범위 비교</h3>
            <div className="dw-bar-label">
              <span>표준 방식</span>
              <span>최근 3년</span>
            </div>
            <div className="dw-bar-track">
              <div className="dw-bar-fill dw-bar-standard" />
            </div>
            <div className="dw-bar-label">
              <span>아이원 ETL</span>
              <span>전체 기간 (무제한)</span>
            </div>
            <div className="dw-bar-track">
              <div className="dw-bar-fill" />
            </div>
          </article>
        </div>
      </section>
      <section
        className="dw-section dw-wave"
        style={
          {
            "--wave": `url(${asset("migration", "imgSection3BgImg")})`,
          } as CSSProperties
        }
      >
        <div className="dw-container">
          <SectionTitle
            label="데이터 마이그레이션"
            title="데이터 무결성을 위한 4대 핵심 기술"
          >
            자체 개발된 고성능 엔진이 귀사의 데이터를 완벽하게 변환합니다.
          </SectionTitle>
          <div className="dw-grid dw-grid-4">
            {[
              [
                "Auto Split Engine",
                "자동 대체 분개",
                "수작업 시 빈번한 차변/대변 불일치 문제를 시스템이 자동으로 검증하고 보정하여 정합성 100%를 보장합니다.",
              ],
              [
                "Smart Sanitization",
                "지능형 데이터 정제",
                "유효하지 않은 코드, 누락된 정보 등 데이터 오류를 자동으로 식별하고 정제하여 유령 데이터 문제를 해결합니다.",
              ],
              [
                "Dynamic Mapping",
                "가변형 매핑 룰",
                "기업별로 다른 계정과목, 거래처, 부서 코드 등을 유연한 매핑 규칙으로 일괄 변환합니다.",
              ],
              [
                "High-Performance Engine",
                "고성능 대용량 처리",
                "대량의 데이터도 안정적으로 처리하는 고성능 엔진으로 이관 시간을 단축하고 업무 연속성을 보장합니다.",
              ],
            ].map(([label, title, copy]) => (
              <TextCard key={title} title={title} label={label}>
                {copy}
              </TextCard>
            ))}
          </div>
        </div>
      </section>
      <section className="dw-section dw-migration-clients">
        <div className="dw-container">
          <SectionTitle
            label="대표 이관 대상 그룹웨어"
            title={
              <>
                아이원디지털웨어는 30여개 기업의
                <br />
                회계 데이터를 이관해 왔습니다.
              </>
            }
          />
          <div className="dw-grid dw-grid-4 dw-partner-grid">
            {[
              "더존비즈온",
              "나눔",
              "나온",
              "가온아이",
              "비즈웰",
              "다우오피스",
              "KT비즈메카",
              "LG U+",
            ].map((name, i) => (
              <article className="dw-card dw-partner" key={name} data-reveal>
                <Art
                  page="migration"
                  name={
                    i === 7 ? "imgImage2" : `imgCostomerLogo${i === 0 ? "" : i}`
                  }
                  alt={name}
                />
                <p>{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Process page="migration" />
      <section className="dw-section dw-results">
        <div className="dw-container dw-split">
          <div>
            <SectionTitle label="실적" title="이관 실적">
              검증된 기술력으로 성공적인 마이그레이션을 수행합니다
            </SectionTitle>
            <Stats
              items={[
                {
                  value: "30+",
                  count: 30,
                  suffix: "+",
                  label: "성공적인 이관 프로젝트",
                },
                {
                  value: "100%",
                  count: 100,
                  suffix: "%",
                  label: "데이터 정합성",
                },
                { value: "무제한", label: "이관 기간 (All Years)" },
              ]}
            />
          </div>
          <Art
            page="migration"
            name="imgSection4Img"
            className="dw-result-art dw-float"
            alt="서버 간 안전한 데이터 마이그레이션"
          />
        </div>
      </section>
      <Contact page="migration" />
    </Layout>
  );
}
