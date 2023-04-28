import { PostList } from "./PostList";

export const Articles = ({ t }) => {
  return (
    <>
      <div>{t("articles.title")}</div>
      <PostList t={t} />
    </>
  );
};
