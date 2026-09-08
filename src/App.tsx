import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import SI from "./pages/si-customizing/page";
import Migration from "./pages/migration/page";
import PMS from "./pages/pms/page";
import About from "./pages/about/page";
import Layout from "./components/renewal/Layout";
import { Button } from "./components/renewal/ui";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/si-customizing" element={<SI />} />
      <Route path="/migration" element={<Migration />} />
      <Route path="/pms" element={<PMS />} />
      <Route path="/about" element={<About />} />
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
