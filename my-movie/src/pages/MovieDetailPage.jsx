import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MoviePages.module.css"
import movieApi from "../api/moviesApi";
import MovieReview from "../components/movie/MovieReview";
import { saveMovie } from "../store/slices/movieSlice";

export default function MovieDetailPage() {
  const { id } = useParams();

  const { isLoggedIn, loggedInId } = useSelector((state) => state.auth.loginState);
  const savedMovies = useSelector((state) => state.movie);

  const [movieData, setMovieData] = useState({});
  const [imgSrc, setImgSrc] = useState(null);
  const [movieReviews, setMovieReviews] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data1 = await movieApi.getMovieById(id);
        setMovieData(data1);
        setImgSrc(`https://image.tmdb.org/t/p/w300/${data1.poster_path}`);

        const data2 = await movieApi.getMovieReviews(id);
        setMovieReviews(data2);
      } catch (error) {
        console.log(`영화(${id}) 상세 페이지 로딩 중 오류 발생: ${error}`);
      }
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (savedMovies[loggedInId] && savedMovies[loggedInId].some((movie) => `${movie.id}` === `${id}`)) {
        setIsSaved(true);
      }
    }
  }, [isLoggedIn, savedMovies]);

  function handleSave(e) {
    const saveData = {
      userId: loggedInId,
      movie: {
        id: movieData.id,
        title: movieData.title,
        poster_path: movieData.poster_path,
      },
    }
    dispatch(saveMovie(saveData));
    setIsSaved(!isSaved);
  }

  return (
    <main>
      <section className={styles.detailSection}>
        <div className={styles.movieDetail}>
          <img src={imgSrc} alt={`${movieData?.title}의 포스터 이미지`} />
          <div>
            <div className={styles.movieTitle}>
              <h2>{movieData.title}</h2>
              <button 
                className={styles.saveBtn}
                disabled={!isLoggedIn}
                onClick={handleSave}
              >{isSaved? "저장 취소" : "영화 저장"}</button>
            </div>
            <p>【 장르 】 {movieData.genres?.map((genre) => <span>: {genre.name} </span>)}</p>
            <p>【 상영시간 】 : {movieData?.runtime}분</p>
            <p>【 개봉일 】 : {movieData?.release_date}</p>
            <p>【 제작사 】 {movieData.production_companies?.map((genre) => <span>: {genre.name} </span>)}</p>
            <p>【 개요 】 : </p>
            <div>{movieData.overview}</div>
          </div>
        </div>
      </section>
      <section className={styles.reviewSection}>
        <MovieReview total={movieReviews?.total_results} reviews={movieReviews?.results}></MovieReview>
      </section>
    </main>
  )
}