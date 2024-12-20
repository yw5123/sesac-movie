import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export default function MovieCard({ key, movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}의 포스터 이미지`} />
        <p>{movie.title}</p>
      </div>
    </Link>
  )
}