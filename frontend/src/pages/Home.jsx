import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <header>
        HEADER
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};
