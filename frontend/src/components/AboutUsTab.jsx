import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPending } from "../redux/globalSlice";
import { getAboutInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";

export const AboutUsTab = () => {
  const [aboutInfo, setAboutInfo] = useState("");
  const { t } = useTranslation();
  const { lang, error, pending } = useSelector(selectGlobal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPending(true));
    getAboutInfo()
      .then((res) => setAboutInfo(res.statusText))
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  }, [dispatch]);
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
