import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import Loader from "../../components/loader/Loader"
import { Link } from "react-router-dom";
import "./loginStyle.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <>
      <div className="login">
        <div className="loader">
          {isFetching && <Loader />}
        </div>
        <div className="top">
          <div className="wrapper">
            <img
              className="img-fluid logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <form>
            <h1 style={{ marginBottom: "10px" }}>Sign In</h1>
            <input
              type="email"
              placeholder="Email or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" style={{ marginTop: "20px" }} onClick={handleLogin}>
              Sign In
            </button>

            <span style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}>
              <div style={{ marginRight: "10px", opacity: "0.7" }}>New to Netflix?</div>
              <Link to="/register" style={{ textDecoration: 'none' }} >
                <b>Sign up now.</b>
              </Link>

            </span>
            <small style={{ opacity: "0.7" }}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
      {/* )} */}

    </>
  );
}

