import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMainInfo } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { loadFromDB } from "../loadFromDB";
export const RulesTab = () => {
  const [mainInfo, setMainInfo] = useState("");
  const { error, lang, pending } = useSelector(selectGlobal);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loader = useMemo(
    () => loadFromDB(getMainInfo, setMainInfo, ["statusText"], dispatch),
    [dispatch]
  );
  useEffect(() => loader(), [loader]);
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
