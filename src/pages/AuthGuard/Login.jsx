import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faMailBulk,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../ContextAPI/ContextAPI";
import { auth } from "./Firebase";

const Login = () => {
  const {
    loading,
    setUserEmail,
    setToken,
    setLoading,
    navigate,
    handleGoogleSignIn,
  } = useContext(StoreContext);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userEmail = inputValue.email;
    const userPassword = inputValue.password;

    setLoading(true);
    await signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;

        const { email, accessToken } = user;
        localStorage.setItem("token", accessToken);
        setUserEmail(email);

        toast.success(`Welcome back-${email.split("@")[0]}!`, {
          position: "top-left",
          theme: "colored",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`${error.message}`, {
          position: "top-left",
          autoClose: 5000,
          theme: "dark",
        });
      });
  };

  return (
    <div className="signup-page">
      <div className="form_container">
        <h2>Login</h2>
        <div style={{ textAlign: "center" }}>
          <button
            className="google-btn btn btn-secondary"
            onClick={handleGoogleSignIn}
          >
            Signup with Google
          </button>
        </div>{" "}
        <br />
        <p style={{ textAlign: "center", fontWeight: "300" }}>OR</p>
        <hr />
        <br />
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">
              <FontAwesomeIcon icon={faMailBulk} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon={faUserLock} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spinPulse />
            ) : (
              "Submit"
            )}
          </button>
          <span>
            Already have an account? <Link to={"/user/signup"}>Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
