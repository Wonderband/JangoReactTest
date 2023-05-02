import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMainInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { setGlobalError } from "../redux/globalSlice";
export const RulesTab = () => {
  const [mainInfo, setMainInfo] = useState("");
  const { error, lang } = useSelector(selectGlobal);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    getMainInfo()
      .then((res) => setMainInfo(res))
      .catch((err) => dispatch(setGlobalError(err.message)));
  });
  return (
    <div>
      {t("rules.title")}
      <br />
      <p>{error}</p>
      {mainInfo}
      <br />
      {lang}
    </div>
  );
};
