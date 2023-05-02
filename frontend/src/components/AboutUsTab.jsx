import { useEffect, useState } from "react";
import { getAboutInfo } from "../redux/operations";

export const AboutUsTab = ({ t }) => {
  const [aboutInfo, setAboutInfo] = useState("");
  useEffect(() => {
    getAboutInfo()
      .then((res) => setAboutInfo(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {t("about.title")} {aboutInfo}
    </div>
  );
};
