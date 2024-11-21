import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MoviePages.module.css"
import movieApi from "../api/moviesApi";
import MovieCard from "../components/movie/MovieCard";

export default function MainPage() {
  const [movieList, setMovieList] = useState({});
  const categoryList = ["now_playing", "popular", "top_rated", "upcoming"];

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieData = {};
        for (const category of categoryList) {
          const data = await movieApi.getMoviesByCategory(category);
          movieData[category] = data.results.slice(0, 10);
        };
        
        setMovieList(movieData);
      } catch (error) {
        console.log(`메인페이지 카테고리 로딩 중 오류 발생: ${error}`);
      };
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <article>
        {categoryList.map((category) => (
          <section className={styles.movieSection}>
            <div className={styles.categoryTitle}>
              <h2>{category}</h2>
              <Link to={`/${category}`} className={styles.categoryLink}><b>더 보기</b></Link>
            </div>
            <div className={`${styles.movieGallery} ${styles.mainGallery}`}>
              {movieList[category]?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
      </article>
    </main>
  );
};