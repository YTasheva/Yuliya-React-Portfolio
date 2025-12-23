import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins =
  process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) || [
    "http://localhost:5173",
  ];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {
    return res
      .status(500)
      .json({ error: "Email server not configured. Please try later." });
  }

  try {
    const to = process.env.EMAIL_TO || process.env.EMAIL_FROM;
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Email send failed", error);
      return res.status(500).json({ error: "Failed to send message." });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Email send failed", err);
    res.status(500).json({ error: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
