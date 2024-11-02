/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase";
import toast, { Toaster } from "react-hot-toast";
import { Backdrop, CircularProgress } from "@mui/material";

function PasswordRecovery() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for loader

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true); // Show loader
    const response = await fetch(
      // api call to verify that the email exist
      "http://localhost:4000/api/v1/auth/userexits",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    setLoading(false);

    if (data.exist) {
      console.log("user exists");
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("Password reset email sent successfully.");
        })
        .catch((error) => {
          setMessage(`Error: ${error.message}`);
        });
    } else {
      toast.error("Email does not exist");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full max-w-md font-semibold flex-col gap-y-6 border-[2px] border-black p-6 rounded-md"
      >
        <h2 className="text-2xl font-bold mb-4">Password Recovery</h2>
        <label className="w-full">
          <p className="mb-1 text-[1rem] leading-[1.375rem] font-semibold text-richblack-5">
            Email Address
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full font-semibold p-2 rounded-md bg-white border-[1px] border-black text-black"
          />
        </label>
        <button
          type="submit"
          className="mt-6 font-semibold py-[8px] px-[12px] p-2 text-white bg-red-600 hover:bg-red-700 rounded-md border-[2px] border-red-800"
        >
          Send Password Reset Email
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
        <button
          type="button"
          className="mt-4 text-blue-700 hover:text-blue-950 font-semibold cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default PasswordRecovery;
