import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { act, useEffect, useState } from "react";
import styles from "./MyPages.module.css";
import { login } from "../store/slices/authSlice";

export default function LoginPage() {
  const { isLoggedIn } = useSelector((state) => state.auth.loginState);
  const actionResult = useSelector((state) => state.auth.actionResult);

  const [loginInput, setLoginInput] = useState({ id: "", password: "" });
  const [loginMessage, setLoginMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (actionResult) {
      if (actionResult.success) {
        navigate("/");
      } else {
        setLoginInput({ id: "", password: "" });
        setLoginMessage("로그인 정보가 일치하지 않습니다.");
      }
    }
  }, [actionResult, navigate]);

  function handleInput(e) {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
    setLoginMessage("");
  };

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(loginInput));
  }

  return (
    <main>
      <section className={styles.loginSection}>
        <h3>SeSAC MOVIE 로그인</h3>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div>
            <label htmlFor="id">아이디: </label>
            <input 
              type="text" 
              name="id" 
              id="id" 
              value={loginInput.id} 
              onChange={handleInput}
            />
            <label htmlFor="password">비밀번호: </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={loginInput.password} 
              onChange={handleInput}
            />
          </div>
          <button type="submit"><b>로그인</b></button>
        </form>
        <div className={styles.message}>{loginMessage}</div>
      </section>
    </main>
  )
}