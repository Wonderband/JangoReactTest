import { useTranslation } from "react-i18next";
import { PostList } from "./PostList";

export const Articles = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("articles.title")}</div>
      <PostList t={t} />
    </>
  );
};
