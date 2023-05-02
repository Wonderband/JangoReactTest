import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../redux/articlesSlice";
import { getArticles } from "../redux/operations";
import { selectArticles, selectPage } from "../redux/selectors";
import { Article } from "./Article";

export const PostList = ({ t }) => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);

  const clickHandler = () => dispatch(togglePage(page));

  return (
    <>
      {articles.length === 0 && <p>Some error!</p>}
      {articles.length > 0 && (
        <>
          <button onClick={clickHandler}>
            {t("pages.page")} {page}
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
    </>
  );
};
