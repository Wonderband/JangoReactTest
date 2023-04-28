import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../redux/articlesSlice";
import { getArticles } from "../redux/operations";
import { selectArticles, selectPage } from "../redux/selectors";

export const PostList = ({ t }) => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const page = useSelector(selectPage);
  // let currentPage = page;
  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);
  // const [posts, setPosts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [error, setError] = useState(false);
  // useEffect(() => {
  //   getArticles(page)
  //     .then(({ data }) => setPosts(data.data))
  //     .catch(({ message }) => {
  //       setError(true);
  //       console.log(message);
  //     });
  // }, [page]);

  const clickHandler = () => dispatch(togglePage(page));

  console.log(articles);
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
                <h4>{post.title}</h4>
                <h5>{post.author}</h5>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
          {console.log(articles)}
        </>
      )}
    </>
  );
};
