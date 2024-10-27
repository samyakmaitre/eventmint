/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
//import express rate limiter
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const checkPasswordStrength = (password) => {
  const UpperCase = /[A-Z]/.test(password);
  const LowerCase = /[a-z]/.test(password);
  const Numbers = /\d/.test(password);
  const SpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const length = password.length;

  if (length < 7) {
    return "Weak";
  }

  if (UpperCase && LowerCase && Numbers && SpecialCharacter && length >= 10) {
    return "Strong";
  } else if (
    (UpperCase && LowerCase && Numbers) ||
    (LowerCase && SpecialCharacter && length >= 7)
  ) {
    return "Medium";
  } else {
    return "Weak";
  }
};

//  rate limiter middleware
const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 7, // Limit each IP to 7 requests changr this as you want
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Route for user login with rate limiter
router.post("/login", loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `All fields are required!`,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user._doc.token = token;
      user._doc.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Successfully!`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure, Please Try Again!`,
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    if (!email.includes("@gmail.com")) {
      return res.status(400).send({
        success: false,
        message: "Invalid Email!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "Weak") {
      return res.status(400).json({
        success: false,
        message:
          "Password is too weak. Please use a stronger password with at least 8 characters, a mix of uppercase, lowercase, numbers, and special characters.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login to continue.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered, Please try again!",
    });
  }
});

module.exports = router;
