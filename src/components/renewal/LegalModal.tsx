import { useEffect, useRef, type ReactNode } from "react";

export type LegalKind = "privacy" | "terms";

const privacy = (
  <>
    <p>
      아이원디지털웨어 주식회사는 개인정보보호법 등 관련 법률에 따라 정보주체의
      개인정보와 권익을 보호하고 관련 고충을 원활하게 처리하기 위해 다음
      처리방침을 둡니다.
    </p>
    <h3>1. 개인정보의 처리 목적</h3>
    <p>
      회원가입 및 관리, 서비스 제공과 정산, 고객 상담, 신규 서비스와 맞춤 정보
      제공을 위해 개인정보를 처리합니다. 목적이 변경되는 경우 사전에 동의를
      구합니다.
    </p>
    <h3>2. 수집 항목과 방법</h3>
    <p>
      아이디, 비밀번호, 이름, 생년월일, 연락처, 이메일, 주소 및 회사 관련 정보를
      홈페이지·서면·전화·상담 게시판·이메일 등을 통해 수집할 수 있습니다. 서비스
      이용 중 접속 IP, 쿠키와 이용 기록이 생성될 수 있습니다.
    </p>
    <h3>3. 처리 및 보유 기간</h3>
    <p>
      법령 또는 이용자 동의에 따른 기간 동안 보유하며 목적 달성 후 지체 없이
      파기합니다. 전자상거래 관련 계약·결제 기록은 관계 법령에 따라 5년, 소비자
      불만과 분쟁 처리 기록은 3년 보존할 수 있습니다.
    </p>
    <h3>4. 정보주체의 권리</h3>
    <p>이용자는 개인정보 열람, 정정, 삭제 및 처리정지를 요구할 수 있습니다.</p>
    <h3>5. 개인정보 보호책임자</h3>
    <p>성명 박종웅 · 연락처 070-4497-3634 · 이메일 ipjw@duzon119.co.kr</p>
    <h3>6. 권익침해 구제</h3>
    <p>
      개인정보 침해신고센터 및 개인정보 분쟁조정위원회(국번 없이 118),
      대검찰청과 경찰청의 사이버범죄 관련 기관에 도움을 요청할 수 있습니다.
    </p>
  </>
);

const terms = (
  <>
    <p>
      아이원디지털웨어 웹서비스 이용약관은 회사가 제공하는 인터넷 관련 서비스의
      이용 조건과 이용자 및 회사의 권리·의무를 정합니다.
    </p>
    <h3>제1조 (목적 및 효력)</h3>
    <p>
      약관은 서비스 화면 등을 통해 공지함으로써 효력이 발생합니다. 회사는 필요한
      경우 약관을 변경해 웹사이트에 알릴 수 있으며, 명시되지 않은 사항은 관계
      법령을 따릅니다.
    </p>
    <h3>제2조 (이용자의 정의 및 인증)</h3>
    <p>
      이용자는 회사 웹사이트에서 정보를 입력하거나 인증 후 서비스를 이용하는
      사람을 말합니다. 허위 정보, 타인 명의 또는 이용자의 귀책사유가 있는 신청은
      승인하지 않을 수 있습니다.
    </p>
    <h3>제3조 (저작권)</h3>
    <p>
      회사가 자체 개발한 콘텐츠의 저작권은 회사에 있으며, 별도 제공처가 표시된
      콘텐츠의 권리는 해당 제공처에 있습니다.
    </p>
    <h3>제4조 (서비스 중단)</h3>
    <p>
      설비 점검, 장애, 통신 두절 또는 서비스 변경 등 필요한 사유가 있는 경우
      서비스가 일시 또는 영구 중단될 수 있으며 가능한 경우 웹사이트를 통해
      알립니다.
    </p>
    <h3>제5조 (회사의 의무)</h3>
    <p>
      회사는 관계 법령과 약관을 준수하고 안정적인 서비스 제공과 개인정보 보호를
      위해 노력합니다.
    </p>
    <h3>제6조 (이용자의 의무)</h3>
    <p>
      이용자는 약관과 관계 법령을 준수해야 하며 허위 정보 등록, 타인의 계정
      도용, 불법 정보 게시, 제3자의 권리 침해 및 서비스 방해 행위를 해서는 안
      됩니다.
    </p>
    <h3>부칙</h3>
    <p>본 약관은 2018년 6월 15일부터 시행합니다.</p>
  </>
);

export default function LegalModal({
  kind,
  onClose,
}: {
  kind: LegalKind;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);
  const title = kind === "privacy" ? "개인정보취급방침" : "이용약관";
  const body: ReactNode = kind === "privacy" ? privacy : terms;
  return (
    <div
      className="dw-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <section
        className="dw-legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dw-legal-title"
      >
        <header>
          <div>
            <span>IONE POLICY</span>
            <h2 id="dw-legal-title">{title}</h2>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label={`${title} 닫기`}>
            ×
          </button>
        </header>
        <div className="dw-legal-body">{body}</div>
        <footer>
          <button onClick={onClose}>확인</button>
        </footer>
      </section>
    </div>
  );
}
