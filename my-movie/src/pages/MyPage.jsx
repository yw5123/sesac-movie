import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MyPages.module.css";
import MovieCard from "../components/movie/MovieCard";

export default function MyPage() {
  const { isLoggedIn, loggedInId } = useSelector((state) => state.auth.loginState);
  const savedMovies = useSelector((state) => state.movie);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  let mySavedMovies = [];
  if (savedMovies[loggedInId]) {
    mySavedMovies = savedMovies[loggedInId];
  }

  return (
    <main>
      <article className={styles.myArticle}>
        <h1>{loggedInId}의 페이지</h1>
        <section className={styles.mySection}>
          <h2>저장된 영화</h2>
          <div className={styles.movieGallery}>
            {mySavedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            {!mySavedMovies.length && <h3>저장된 영화가 없습니다</h3>}
          </div>
        </section>
      </article>
    </main>
  )
}