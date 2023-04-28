import "./App.css";
import { PostList } from "./components/PostList";
export const App = () =>
  //<PostList />;
  {
    const isLoading = useSelector(selectIsLoading);
    const isAuth = useSelector(selectAuthToken);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

    return (
      <>
        {isLoading && <Loader />}
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? <DashboardPage /> : <Navigate replace to="/login" />
            }
          >
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
            <Route path="currency" element={<CurrencyMobile />} />
          </Route>
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={isAuth ? <Navigate to="/home" /> : <RegistrationPage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Toast />
      </>
    );
  };
export default App;
