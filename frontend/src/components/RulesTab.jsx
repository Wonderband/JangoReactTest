import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMainInfo } from "../redux/operations";
import { selectLanguage } from "../redux/selectors";

export const RulesTab = ({ t }) => {
  const [mainInfo, setMainInfo] = useState("");
  const lang = useSelector(selectLanguage);
  useEffect(() => {
    getMainInfo()
      .then((res) => setMainInfo(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {t("rules.title")}
      {mainInfo}
      {lang}
    </div>
  );
};
