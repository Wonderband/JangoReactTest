import { Routes, Route } from "react-router-dom";
import { AboutUsTab } from "./components/AboutUsTab";
import { Articles } from "./components/Articles";
import { RulesTab } from "./components/RulesTab";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<Home t={t} />}>
        <Route index element={<RulesTab t={t} />} />
        <Route path="articles" element={<Articles t={t} />} />
        <Route path="about" element={<AboutUsTab t={t} />} />
      </Route>
      <Route path="*" element={<Page404 t={t} />} />
    </Routes>
  );
};
export default App;
