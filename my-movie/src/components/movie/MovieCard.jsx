export default function MovieCard({ key, movie }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}의 포스터 이미지`} />
      <p>{movie.title}</p>
    </div>
  )
}