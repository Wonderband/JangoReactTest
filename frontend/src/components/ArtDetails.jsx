import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { setError, setPending } from "../redux/globalSlice";
import { getArticleById } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";

export const ArtDetails = () => {
  const [artContent, setArtContent] = useState({});
  const { articleId } = useParams();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error } = useSelector(selectGlobal);

  useEffect(() => {
    dispatch(setPending(true));
    getArticleById(articleId)
      .then((res) => setArtContent(res.data))
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  }, [dispatch, articleId]);
  return (
    <div>
      <p>{error}</p>
      <h1>{artContent.title}</h1>
      <h3>{artContent.author}</h3>
      <p>{artContent.content}</p>
      <Link to={location.state.from}>{t("article.back")}</Link>
    </div>
  );
};
