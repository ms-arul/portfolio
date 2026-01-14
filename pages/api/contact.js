import nodemailer from "nodemailer";

// ✅ Reuse transporter between invocations (important for Vercel)
let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App password
      },
    });
  }
  return transporter;
}

export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  // ✅ Fast validation (prevents wasted cold-start work)
  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    typeof email !== "string"
  ) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "msarul7686@gmail.com", // ✅ fixed receiver
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <div style="font-family: system-ui, Arial; padding: 10px">
          <h3>New Contact Form Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);

    return res.status(500).json({
      success: false,
      message: "Email service unavailable",
    });
  }
}
