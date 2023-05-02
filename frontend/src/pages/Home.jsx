import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/globalSlice";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" },
};

export const Home = () => {
  const linkStyle = {
    paddingRight: "12px",
  };
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        HEADER
        <nav>
          <Link style={linkStyle} to="/">
            {t("navigation.1")}
          </Link>
          <Link style={linkStyle} to="/articles">
            {t("navigation.2")}
          </Link>
          <Link to="/about"> {t("navigation.3")}</Link>
        </nav>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
                dispatch(setLanguage(lng));
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};
