import styles from "./MovieReview.module.css";

export default function MovieReview({total, reviews}) {
  if(!reviews) return

  const reviewTags = reviews.map((review) => {
    const created_date = review.created_at.split("T")[0];
    const created_time = review.created_at.split("T")[1].split(".")[0];

    return (
      <div className={styles.reviewBox}>
        <p><b>{review.author}</b> ({created_date} {created_time})</p>
        <div>{review.content}</div>
      </div>
    )
  })

  return (
    <div>
      <h3>후기 ({total}개)</h3>
      {reviewTags}
    </div>
  )
}