import { useEffect, useState } from "react";
import { getMainInfo } from "../redux/operations";

export const RulesTab = ({ t }) => {
  const [mainInfo, setMainInfo] = useState("");
  useEffect(() => {
    getMainInfo()
      .then((res) => setMainInfo(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {t("rules.title")}
      {mainInfo}
    </div>
  );
};
