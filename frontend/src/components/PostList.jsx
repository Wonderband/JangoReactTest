import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../redux/articlesSlice";
import { getArticles } from "../redux/operations";
import { selectArticles, selectGlobal } from "../redux/selectors";
import { Article } from "./Article";

export const PostList = ({ t }) => {
  const dispatch = useDispatch();
  const { articles, page } = useSelector(selectArticles);
  const { lang, error } = useSelector(selectGlobal);

  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);

  const clickHandler = () => dispatch(togglePage(page));

  return (
    <>
      <p>{error}</p>
      {articles.length > 0 && (
        <>
          <button onClick={clickHandler}>
            {t("pages.page")} {page}
          </button>
          <br />
          {lang}
          <ul>
            {articles.map((post) => (
              <li key={post.pk}>
                <Article post={post} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
