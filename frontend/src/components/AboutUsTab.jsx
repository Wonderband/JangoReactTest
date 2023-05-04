import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { loadFromDB } from "../loadFromDB";

export const AboutUsTab = () => {
  const [aboutInfo, setAboutInfo] = useState("");
  const { t } = useTranslation();
  const { lang, error, pending } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  const loader = useMemo(
    () => loadFromDB(getAboutInfo, setAboutInfo, ["statusText"], dispatch),
    [dispatch]
  );
  useEffect(() => loader(), [loader]);

  return (
    <div>
      <p>{error}</p>
      <p>{pending}</p>
      <p>{lang}</p>
      {t("about.title")}
      <br /> {aboutInfo}
    </div>
  );
};
