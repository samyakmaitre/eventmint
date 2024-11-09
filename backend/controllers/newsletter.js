const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send confirmation email
const sendConfirmationEmail = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for Subscribing to EventMint",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <!-- Header -->
      <div style="background-color: #ffffff; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom: 1px solid #e0e0e0;">
        <img src="cid:headerImage" alt="EventMint Logo" style="width: 100px; margin-bottom: 10px;">
        <h1 style="color: #000000; margin: 0;">Welcome to <span style="color: #ed4134;">Event</span>Mint!</h1>
      </div>
  
      <!-- Body Content -->
      <div style="padding: 20px; text-align: center;">
        <h2 style="color: #000000;">Thank You for Subscribing!</h2>
        <p>Dear Subscriber,</p>
        <p>We're excited to have you join us at EventMint. Get ready for exclusive updates, event insights, and more!</p>
  
        <!-- Button -->
        <div style="margin-top: 20px;">
          <a href="https://eventmint.vercel.app/" 
             style="display: inline-block; padding: 12px 25px; background-color: #FF0000; color: white; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px;">
            Discover More Events
          </a>
        </div>
      </div>
  
      <!-- Footer -->
      <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
        <p style="font-size: 14px; color: #666;">Best Regards,<br><strong>EventMint Team</strong></p>
        <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} EventMint. All rights reserved.</p>
      </div>
    </div>
  `,
    attachments: [
      {
        filename: "eventmint-logo.png",
        path: "C:/Users/ayush/OneDrive/Desktop/eventmint/backend/controllers/logo1.png",
        cid: "headerImage",
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};

router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    await sendConfirmationEmail(email);
    res.status(200).json({
      message: "Subscription successful! A confirmation email has been sent.",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email." });
  }
});

module.exports = router;
