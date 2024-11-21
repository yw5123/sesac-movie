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
        <li><Link to="/" className={styles.link}><h3>SeSAC MOVIE</h3></Link></li>
      </ul>
      <ul>
        {!isLoggedIn && <li><Link to="/login" className={styles.link}><h4>로그인</h4></Link></li>}
        {isLoggedIn && <li><Link to="/myPage" className={styles.link}><h4>마이페이지</h4></Link></li>}
        {isLoggedIn && <li><a onClick={handleLogout} className={styles.link}><h4 className={styles.logout}>로그아웃</h4></a></li>}
      </ul>
    </nav>
  )
}