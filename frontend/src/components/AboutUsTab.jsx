import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalError } from "../redux/globalSlice";
import { getAboutInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";

export const AboutUsTab = () => {
  const [aboutInfo, setAboutInfo] = useState("");
  const { t } = useTranslation();
  const { lang, error } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  useEffect(() => {
    getAboutInfo()
      .then((res) => setAboutInfo(res))
      .catch((err) => dispatch(setGlobalError(err.message)));
  }, [dispatch]);
  return (
    <div>
      <p>{error}</p>
      <p>{lang}</p>
      {t("about.title")} {aboutInfo}
    </div>
  );
};
