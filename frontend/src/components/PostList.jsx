import { useEffect, useState } from "react";
import { getAllPosts } from "../service";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllPosts(page)
      .then((posts) => setPosts(posts.data.data))
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [page]);

  const togglePage = () => setPage(page === 1 ? 2 : 1);

  return (
    <>
      {error && <p>Some error!</p>}
      <ul>
        {posts?.length > 0 &&
          posts.map((post) => (
            <li key={post.pk}>
              <h4>{post.title}</h4>
              <h5>{post.author}</h5>
              <p>{post.content}</p>
            </li>
          ))}
      </ul>
      {!error && <button onClick={togglePage}>Page {page}</button>}
    </>
  );
};
