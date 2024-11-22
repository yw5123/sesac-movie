import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import MainPage from "../pages/MainPage";
import MovieListPage from "../pages/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ":category",
        element: <MovieListPage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetailPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/mypage",
        element: <MyPage />
      },
    ],
  },
]);

export default router;