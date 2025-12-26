import sgMail from "@sendgrid/mail";

const allowedOrigins =
  process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()).filter(Boolean) ||
  [];

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin":
    allowedOrigins.length === 0
      ? origin || "*"
      : allowedOrigins.includes(origin)
        ? origin
        : allowedOrigins[0],
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
});

export const handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin;

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(origin), body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders(origin),
        body: JSON.stringify({ error: "Missing required fields." }),
      };
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO || from;

    if (!apiKey || !from) {
      return {
        statusCode: 500,
        headers: corsHeaders(origin),
        body: JSON.stringify({
          error: "Email server not configured. Please try later.",
        }),
      };
    }

    sgMail.setApiKey(apiKey);
    const msg = {
      to,
      from,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Email send failed", err);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Failed to send message." }),
    };
  }
};
