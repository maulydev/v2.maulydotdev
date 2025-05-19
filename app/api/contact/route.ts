import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  try {
    // Check if request has a body
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return Response.json(
        { error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    // Try to parse the body with better error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      return Response.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Check if body is empty
    if (!body || Object.keys(body).length === 0) {
      return Response.json({ error: "Request body is empty" }, { status: 400 });
    }

    const { name, email, content } = body;

    // Validate required fields
    if (!name || !email || !content) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // where to send the notification
      subject: `New Message from ${name} via v2-mauly`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#fdf5ff" style="font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border-top: 6px solid #d63384; padding: 30px; max-width: 600px;">
                <tr>
                  <td style="font-size: 22px; font-weight: bold; color: #d63384; padding-bottom: 20px;">
                    📨 Contact Form
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 15px;">
                    <strong style="color: #6f42c1;">Name:</strong><br />
                    <span style="font-size: 16px; color: #333;">${name}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 15px;">
                    <strong style="color: #6f42c1;">Email:</strong><br />
                    <span style="font-size: 16px; color: #333;">${email}</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong style="color: #6f42c1;">Message:</strong><br />
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8f0fc; padding: 15px; border-left: 4px solid #d63384; margin-top: 10px;">
                      <tr>
                        <td style="font-size: 15px; color: #444; line-height: 1.6;">
                          ${content}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Message received successfully", name, email, content },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
};
