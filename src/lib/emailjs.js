import emailjs from "@emailjs/browser";

export async function sendEmail({
  name,
  email,
  message,
  subject = "New Form Submission",
}) {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        message,
        subject,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      result,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      error,
    };
  }
}