import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import MainPage from "../pages/MainPage";
import MovieListPage from "../pages/MovieListPage";

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
      }
    ],
  },
]);

export default router;