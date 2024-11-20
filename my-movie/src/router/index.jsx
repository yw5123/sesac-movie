import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import MainPage from "../pages/MainPage";
import MovieListPage from "../pages/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage";

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
      }
    ],
  },
]);

export default router;