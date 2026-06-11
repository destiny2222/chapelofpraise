'use server'

import { Resend } from 'resend';

const resendApiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Please fill out all required fields.' };
  }

  if (!resend) {
    console.error('RESEND_API_KEY is not set. Could not send email.');
    // To allow the UI to work while you are getting an API key, we will simulate a success.
    // In production, this should return an error.
    return { success: true, warning: 'API Key not set. Simulated success.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Chapel of Praise <onboarding@resend.dev>', // resend.dev is allowed for testing
      to: ['niceboy235461@gmail.com'], // Using your registered Resend email for testing
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Chapel of Praise Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      // Pass the specific Resend error message to the UI so the user knows what's wrong
      return { error: `Email service error: ${error.message}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Submission Error:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
