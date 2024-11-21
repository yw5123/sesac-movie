import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './Header.module.css';
import { logout } from "../../store/slices/authSlice";


export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth.loginState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <nav className={styles.myHeader}>
      <ul>
        <li><Link to="/" className={styles.link}>SeSAC MOVIE🎬</Link></li>
      </ul>
      <ul>
        {!isLoggedIn && <li><Link to="/login" className={styles.link}>로그인</Link></li>}
        {isLoggedIn && <li><Link to="/myPage" className={styles.link}>마이페이지</Link></li>}
        {isLoggedIn && <li><a onClick={handleLogout} className={`${styles.link} ${styles.logout}`}>로그아웃</a></li>}
      </ul>
    </nav>
  )
}