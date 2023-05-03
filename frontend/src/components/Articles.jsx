import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPending } from "../redux/globalSlice";
import { getAllArticles } from "../redux/operations";
import { selectGlobal } from "../redux/selectors";
import { Article } from "./Article";

export const Articles = () => {
  const { t } = useTranslation();
  const { lang, error, pending } = useSelector(selectGlobal);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPending(true));
    getAllArticles(page)
      .then((res) => setArticles(res.data.data))
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => dispatch(setPending(false)));
  }, [dispatch, page]);

  const clickHandler = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  return (
    <div>
      {t("articles.title")}
      <p>{error}</p>
      <p>{pending}</p>
      <p>{lang}</p>
      {articles.length > 0 && (
        <>
          <button onClick={clickHandler}>
            {t("pages.page")} {page === 1 ? 2 : 1}
          </button>

          <ul>
            {articles.map((post) => (
              <li key={post.pk}>
                <Article post={post} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
