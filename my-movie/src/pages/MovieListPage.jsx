import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./Pages.module.css"
import movieApi from "../api/moviesApi";
import MovieCard from "../components/movie/MovieCard";

export default function MovieListPage() {
  const { category } = useParams();
  const categoryData = new Set(["now_playing", "popular", "top_rated", "upcoming"]);

  if (!categoryData.has(category)) {
    return <Navigate to="/" replace></Navigate>
  }
  
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await movieApi.getMoviesByCategory(category);
        setMovieList(data.results);
      } catch (error) {
        console.log(`${category} 페이지 로딩 중 오류 발생: ${error}`);
      };
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.movieSection}>
        <h2>{category}</h2>
        <div className={styles.movieGallery}>
          {movieList?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}