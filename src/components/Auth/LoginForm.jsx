/** @format */

import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/operations/authAPI";
import { loginValidation } from "../../validations/validation";
// Import Firebase Auth and Google Auth Provider
import { auth, provider, signInWithPopup } from "./Firebase";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginValidation.validate(
        { email, password },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        // newErrors[err.path] = err.errors[0];
      });

      setErrors(newErrors);
      return;
    }
    dispatch(login(email, password, navigate));
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        console.log("Google sign-in successful:", result.user);
        navigate("/");
      })
      .catch((error) => {
        // Handle errors
        console.log("Google sign-in error:", error.message);
      });
  };

  return (
    <div className="">
      <form
        noValidate
        onSubmit={handleOnSubmit}
        className="flex w-full font-semibold flex-col gap-y-6 border-[2px] border-black p-6 rounded-md"
      >
        <label className="w-full">
          <p className="mb-1 text-[1rem] leading-[1.375rem] font-semibold text-richblack-5">
            Email Address
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style  w-full font-semibold p-2 rounded-md bg-white border-[1px] border-black text-black"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </label>
        <label className="relative w-full">
          <p className="mb-1 text-[0.95rem] leading-[1.375rem] font-semibold text-richblack-5">
            Password
          </p>
          <div className="flex items-center">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full font-semibold !pr-10 p-2 border-[1px] bg-white rounded-md border-black text-black"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[45 px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#000000" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#000000" />
              )}
            </span>
          </div>
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </label>
        <button
          type="submit"
          className="mt-6 font-semibold py-[8px] px-[12px] p-2 text-white bg-red-600 hover:bg-red-700 rounded-md border-[2px] border-red-800"
        >
          Sign In
        </button>

        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 font-semibold py-[8px] px-[12px] mt-4 p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md border-[2px] border-blue-800"
        >
          <AiOutlineGoogle size={24} /> {/* Google Icon */}
          Login in with Google
        </button>

        <div className="flex gap-2 flex-col mt-2">
          <div className="flex gap-2 justify-center items-center">
            <span className="h-[1px] bg-black w-[70%]"></span>
            <span>OR</span>
            <span className="h-[1px] bg-black w-[70%]"></span>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className=" font-normal select-none">
              Don't have an account?
            </div>
            <button
              className="text-blue-700 hover:text-blue-950 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              New Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
