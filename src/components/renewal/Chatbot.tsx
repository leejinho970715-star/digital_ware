import { useEffect, useRef, useState } from "react";
import { contactPhone } from "./config";
import { Art, SiteLink } from "./ui";

type Faq = {
  question: string;
  answer: string;
  links?: { label: string; to: string }[];
};

const faqs: Faq[] = [
  {
    question: "어떤 서비스를 제공하나요?",
    answer:
      "아이원디지털웨어는 기업 맞춤형 SI 구축, 데이터 마이그레이션, ERP와 연동되는 PMS 솔루션을 제공합니다. 기업의 현재 환경과 업무 절차를 확인한 뒤 적합한 방식을 제안해드립니다.",
    links: [
      { label: "SI 살펴보기", to: "/si-customizing" },
      { label: "마이그레이션", to: "/migration" },
      { label: "PMS 솔루션", to: "/pms" },
    ],
  },
  {
    question: "SI 커스터마이징이 궁금해요",
    answer:
      "기성 솔루션으로 해결하기 어려운 기업 고유의 업무를 분석해 웹·앱 시스템으로 구축합니다. ERP와 기존 내부 시스템 연동, 데이터 이관, 운영 안정화까지 지원합니다.",
    links: [{ label: "SI 자세히 보기", to: "/si-customizing" }],
  },
  {
    question: "데이터 이관은 어떻게 진행하나요?",
    answer:
      "현황 분석부터 이관 계획, 테스트 이관, 본 이관, 검증과 안정화 순서로 진행합니다. 데이터 손실과 업무 공백을 줄이기 위해 단계별 정합성 검증을 수행합니다.",
    links: [{ label: "이관 절차 보기", to: "/migration" }],
  },
  {
    question: "PMS로 무엇을 관리할 수 있나요?",
    answer:
      "프로젝트 계약, 일정, 인력, 원가, 진행 상황과 보고서를 한곳에서 관리할 수 있습니다. 기존 ERP와 실시간으로 데이터를 연동해 이중 입력을 줄입니다.",
    links: [{ label: "PMS 기능 보기", to: "/pms" }],
  },
  {
    question: "도입 비용과 기간을 알고 싶어요",
    answer:
      "비용과 기간은 사용 인원, 연동 시스템, 데이터 규모와 필요한 기능에 따라 달라집니다. 현재 환경을 알려주시면 전문 상담사가 범위와 일정을 확인해 안내해드립니다.",
    links: [
      { label: "온라인 문의", to: "/inquiry" },
      { label: `전화 ${contactPhone}`, to: `tel:${contactPhone}` },
    ],
  },
  {
    question: "상담 가능한 시간이 언제인가요?",
    answer:
      "고객센터 운영 시간은 평일 오전 9시부터 오후 6시까지입니다. 운영 시간 외에는 온라인 문의를 남겨주시면 확인 후 연락드리겠습니다.",
    links: [
      { label: "온라인 문의", to: "/inquiry" },
      { label: `전화 ${contactPhone}`, to: `tel:${contactPhone}` },
    ],
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Faq | null>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <aside className="dw-chatbot" aria-label="AI 스마트 챗봇">
      {open && (
        <div
          className="dw-chatbot-panel"
          id="dw-chatbot-panel"
          ref={panel}
          role="region"
          aria-live="polite"
          aria-label="챗봇 대화"
        >
          <div className="dw-chatbot-head">
            <div>
              <strong>AI 스마트 챗봇</strong>
              <span>아이원디지털웨어 서비스 안내</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="챗봇 닫기">
              ×
            </button>
          </div>
          <div className="dw-chatbot-body">
            <div className="dw-chatbot-message">
              안녕하세요. 궁금한 항목을 선택해 주세요.
            </div>
            {selected && (
              <div className="dw-chatbot-conversation">
                <p className="dw-chatbot-user">{selected.question}</p>
                <div className="dw-chatbot-answer">
                  <p>{selected.answer}</p>
                  {selected.links && (
                    <div className="dw-chatbot-links">
                      {selected.links.map((link) => (
                        <SiteLink to={link.to} key={link.label}>
                          {link.label} →
                        </SiteLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="dw-chatbot-questions" aria-label="질문 항목">
              {faqs.map((faq) => (
                <button
                  key={faq.question}
                  className={selected === faq ? "is-selected" : ""}
                  onClick={() => setSelected(faq)}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
          <div className="dw-chatbot-foot">
            원하는 답변이 없다면{" "}
            <SiteLink to="/inquiry">1:1 문의를 남겨주세요.</SiteLink>
          </div>
        </div>
      )}
      <button
        className="dw-chatbot-trigger"
        aria-expanded={open}
        aria-controls="dw-chatbot-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <Art name="imgAiSmartChatbot" className="dw-float" eager />
        <span>{open ? "챗봇 닫기" : "AI 스마트 챗봇"}</span>
      </button>
    </aside>
  );
}
