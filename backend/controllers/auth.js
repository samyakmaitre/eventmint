/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const User = require("../models/User");
require("dotenv").config();

// Helper function to send error response
const sendErrorResponse = (res, status, message) => {
  return res.status(status).json({ success: false, message });
};

// Password strength checker function
const checkPasswordStrength = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 7) return "Weak";
  if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && password.length >= 10) return "Strong";
  return "Medium";
};

// Rate limiter middleware for login attempts
const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 7, // Limit each IP to 7 requests
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Login route with rate limiter
router.post("/login", loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return sendErrorResponse(res, 400, "All fields are required!");

    const user = await User.findOne({ email });
    if (!user) return sendErrorResponse(res, 401, "User is not registered. Please sign up.");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return sendErrorResponse(res, 401, "Password is incorrect");

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    user._doc.token = token;
    user._doc.password = undefined;

    res.cookie("token", token, { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), httpOnly: true })
      .status(200)
      .json({
        success: true,
        token,
        user,
        message: "User logged in successfully!",
      });
  } catch (error) {
    console.error(error);
    sendErrorResponse(res, 500, "Login failure. Please try again!");
  }
});

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) 
      return sendErrorResponse(res, 403, "All fields are required.");

    if (!/^[\w-.]+@gmail\.com$/.test(email)) 
      return sendErrorResponse(res, 400, "Invalid email format. Only Gmail addresses are allowed.");

    if (password !== confirmPassword) 
      return sendErrorResponse(res, 400, "Passwords do not match.");

    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "Weak") 
      return sendErrorResponse(res, 400, "Weak password. Use at least 8 characters, uppercase, lowercase, numbers, and special characters.");

    const existingUser = await User.findOne({ email });
    if (existingUser) return sendErrorResponse(res, 400, "User already exists. Please log in.");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    res.status(200).json({ success: true, user, message: "User registered successfully!" });
  } catch (error) {
    console.error(error.message);
    sendErrorResponse(res, 500, "User registration failed. Please try again!");
  }
});

// Check if user exists route
router.post("/userexists", async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });

    res.status(200).send({ exist: !!userExist });
  } catch (error) {
    sendErrorResponse(res, 500, "Internal server error");
  }
});

module.exports = router;
