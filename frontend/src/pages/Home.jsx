import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  const linkStyle = {
    paddingRight: "12px",
  };
  return (
    <>
      <header>
        HEADER
        <nav>
          <Link style={linkStyle} to="/">
            Home
          </Link>
          <Link style={linkStyle} to="/articles">
            Articles
          </Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};
