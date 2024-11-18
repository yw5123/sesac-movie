import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.myHeader}>
      <ul>
        <li><Link to="/" className={styles.link}>SeSAC MOVIE🎬</Link></li>
      </ul>
      <ul>
        <li></li>
      </ul>
    </nav>
  )
}