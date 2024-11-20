import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Pages.module.css";
import movieApi from "../api/moviesApi";
import MovieReview from "../components/movie/MovieReview";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [imgSrc, setImgSrc] = useState(null);
  const [movieReviews, setMovieReviews] = useState();

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

  return (
    <main>
      <section className={styles.detailSection}>
        <div className={styles.movieDetail}>
          <img src={imgSrc} alt={`${movieData?.title}의 포스터 이미지`} />
          <div>
            <h2>{movieData.title}</h2>
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