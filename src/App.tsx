import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import SI from "./pages/si-customizing/page";
import Migration from "./pages/migration/page";
import PMS from "./pages/pms/page";
import About from "./pages/about/page";
import Layout from "./components/renewal/Layout";
import { Button } from "./components/renewal/ui";
import {
  BusinessInquiry,
  CustomerAs,
  GovernmentNotice,
  GovernmentNoticeDetail,
  Location,
  Login,
  MyPage,
  PurchaseInquiry,
  Signup,
} from "./pages/portal/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/si-customizing" element={<SI />} />
      <Route path="/migration" element={<Migration />} />
      <Route path="/pms" element={<PMS />} />
      <Route path="/about" element={<About />} />
      <Route path="/government-notice" element={<GovernmentNotice />} />
      <Route
        path="/government-notice/:id"
        element={<GovernmentNoticeDetail />}
      />
      <Route path="/inquiry" element={<PurchaseInquiry />} />
      <Route path="/business-inquiry" element={<BusinessInquiry />} />
      <Route path="/customer-as" element={<CustomerAs />} />
      <Route path="/location" element={<Location />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route
        path="*"
        element={
          <Layout>
            <section className="dw-section dw-container">
              <h1>페이지를 찾을 수 없습니다.</h1>
              <Button to="/">홈으로 돌아가기 →</Button>
            </section>
          </Layout>
        }
      />
    </Routes>
  );
}
