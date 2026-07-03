import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !company || !email || !phone || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#2563eb;">📩 New Contact Form Submission </h2>

 <table cellpadding="8" cellspacing="0">
  <tr>
    <td><strong>👤 Name:</strong></td>
    <td>${name}</td>
  </tr>

  <tr>
    <td><strong>💼 Company:</strong></td>
    <td>${company}</td>
  </tr>

  <tr>
    <td><strong>✉️ Email:</strong></td>
    <td>${email}</td>
  </tr>

  <tr>
    <td><strong>📞 Phone:</strong></td>
    <td>${phone}</td>
  </tr>
</table>

          <h3 style="margin-top: 24px; color: #2563eb;">
  💬 Message
</h3>

<div
  style="
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-left: 4px solid #2563eb;
    padding: 16px;
    border-radius: 10px;
    color: #374151;
    line-height: 1.6;
  "
>
  ${message.replace(/\n/g, "<br>")}
</div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      },
    );
  }
}
