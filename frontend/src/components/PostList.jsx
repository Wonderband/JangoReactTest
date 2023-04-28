import { useEffect, useState } from "react";
import { getAllPosts } from "../service";

export const PostList = ({ t }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllPosts(page)
      .then(({ data }) => setPosts(data.data))
      .catch(({ message }) => {
        setError(true);
        console.log(message);
      });
  }, [page]);

  const togglePage = () => setPage(page === 1 ? 2 : 1);

  return (
    <>
      {error && <p>Some error!</p>}
      {posts.length > 0 && (
        <>
          <button onClick={togglePage}>
            {t("pages.page")} {page}
          </button>
          <ul>
            {posts.map((post) => (
              <li key={post.pk}>
                <h4>{post.title}</h4>
                <h5>{post.author}</h5>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
