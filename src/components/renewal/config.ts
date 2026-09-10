// Empty origin uses the existing app's routes when this skin is integrated.
export const legacyOrigin =
  import.meta.env.VITE_LEGACY_ORIGIN ?? "https://idigitalware.com";
export const serviceRoutes = [
  "/si-customizing",
  "/migration",
  "/pms",
  "/about",
  "/government-notice",
  "/inquiry",
  "/business-inquiry",
  "/customer-as",
  "/location",
  "/login",
  "/signup",
  "/mypage",
];
export const contactPhone = "1877-0256"; // As specified by the supplied Figma contact sections.
export const socialLinks = [
  ["네이버 카페", "https://cafe.naver.com/ionesoftbank", "imgSpeakerNotes"],
  ["네이버 블로그", "https://blog.naver.com/zhogksgjqm", "imgNews"],
  ["유튜브", "https://youtube.com/@IONEsoftBK_official", "imgYouTube"],
  ["카카오톡", "https://pf.kakao.com/_xnFVzK", "imgSpeech"],
  ["인스타그램", "https://www.instagram.com/ione130501", "imgInstagram"],
] as const;
