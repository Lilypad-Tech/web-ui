export async function sendEmail(
  email: string,
  emailType: string
): Promise<string> {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, emailType }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return data.message;
  } catch (error: any) {
    console.error("Error in sendEmail:", error);
    throw new Error(error.message || "An unexpected error occurred");
  }
}
