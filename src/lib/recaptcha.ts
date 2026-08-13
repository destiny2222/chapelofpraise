export async function verifyRecaptcha(token: string | null | undefined): Promise<boolean> {
  if (!token) {
    return false;
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return !!data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}
