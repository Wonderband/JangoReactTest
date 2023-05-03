import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMainInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { setError, setPending } from "../redux/globalSlice";
export const RulesTab = () => {
  const [mainInfo, setMainInfo] = useState("");
  const { error, lang, pending } = useSelector(selectGlobal);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    setPending(true);
    getMainInfo()
      .then((res) => setMainInfo(res.statusText))
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  });
  return (
    <div>
      {t("rules.title")}
      <br />
      <p>{error}</p>
      <p>{pending}</p>
      {mainInfo}
      <br />
      {lang}
    </div>
  );
};
