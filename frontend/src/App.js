import { Routes, Route } from "react-router-dom";

// import "./App.css";
import { AboutUsTab } from "./components/AboutUsTab";
import { Articles } from "./components/Articles";
import { RulesTab } from "./components/RulesTab";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
// import { PostList } from "./components/PostList";
export const App = () =>
  //<PostList />;

  {
    // const isAdmin = false;
    // const isLoading = useSelector(selectIsLoading);
    // const isAuth = useSelector(selectAuthToken);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(refreshUser());
    // }, [dispatch]);

    return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<RulesTab />} />
          <Route path="articles" element={<Articles />} />
          <Route path="about" element={<AboutUsTab />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  };
export default App;
