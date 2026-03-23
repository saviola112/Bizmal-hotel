import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
  }),
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.json({ message: "Bizmal Hotel API is running" });
});

app.post("/api/bookings", async (req, res) => {
  try {
    const {
      guestName,
      guestPhone,
      guestEmail,
      guestCount,
      roomName,
      checkIn,
      checkOut,
      nights,
      total,
    } = req.body;

    if (
      !guestName ||
      !guestPhone ||
      !guestEmail ||
      !guestCount ||
      !roomName ||
      !checkIn ||
      !checkOut ||
      !nights ||
      !total
    ) {
      return res.status(400).json({
        success: false,
        message: "All booking fields are required.",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HOTEL_RECEIVER_EMAIL,
      subject: `New Booking Request - ${roomName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>New Bizmal Hotel Booking Request</h2>
          <p><strong>Guest Name:</strong> ${guestName}</p>
          <p><strong>Phone Number:</strong> ${guestPhone}</p>
          <p><strong>Email:</strong> ${guestEmail}</p>
          <p><strong>Number of Guests:</strong> ${guestCount}</p>
          <p><strong>Room:</strong> ${roomName}</p>
          <p><strong>Check-In:</strong> ${checkIn}</p>
          <p><strong>Check-Out:</strong> ${checkOut}</p>
          <p><strong>Number of Nights:</strong> ${nights}</p>
          <p><strong>Estimated Total:</strong> ₦${Number(total).toLocaleString()}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Booking request sent successfully.",
    });
  } catch (error) {
    console.error("Booking email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send booking request.",
      error: error.message,
    });
  }
});

export default app;
