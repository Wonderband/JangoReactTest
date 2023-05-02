import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { getArticleById } from "../redux/operations";

export const ArtDetails = () => {
  const [artContent, setArtContent] = useState({});
  const { articleId } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    getArticleById(articleId)
      .then((res) => setArtContent(res))
      .catch((err) => console.log(err));
  }, [articleId]);
  return (
    <div>
      <h1>{artContent.title}</h1>
      <h3>{artContent.author}</h3>
      <p>{artContent.content}</p>
      <Link to={location.state.from}>{t("article.back")}</Link>
    </div>
  );
};
