import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserLock,
  faSpinner,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";
import { StoreContext } from "../../ContextAPI/ContextAPI";
import { auth } from "./Firebase";

const Signup = () => {
  const { loading, setLoading, navigate, setUserEmail, handleGoogleSignIn } =
    useContext(StoreContext);

  const [inp, setInp] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInp({ ...inp, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = inp.email;
    const userPassword = inp.password;

    setLoading(true);
    await createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setLoading(false);

        const user = userCredential.user;
        const { email, accessToken } = user;
        setUserEmail(email);
        localStorage.setItem("token", accessToken);

        toast.success("Welcome to eventmint! ", {
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
        <h2 className="text-center text-3xl ">Signup</h2>
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <FontAwesomeIcon icon={faMailBulk} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={inp.email}
              placeholder="Enter a valid email"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUserCircle} /> Username
            </label>
            <input
              type="text"
              name="username"
              value={inp.username}
              placeholder="your good name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon={faUserLock} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={inp.password}
              placeholder="Enter a strong password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit">
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spinPulse />
            ) : (
              "Register"
            )}
          </button>
          <span>
            Already have an account? <Link to={"/user/login"}>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
