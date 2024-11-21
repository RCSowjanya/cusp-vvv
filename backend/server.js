require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Endpoint
app.post("/api/send-email", (req, res) => {
  const { name, email, phone, bill, city, message, requirement } = req.body;

  if (!name || !email || !phone || !bill || !city || !message || !requirement) {
    return res.status(400).send("All fields are required.");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER, // Receiver email
    subject: "New Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Requirement: ${requirement}
      Electricity Bill: ${bill}
      City: ${city}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
