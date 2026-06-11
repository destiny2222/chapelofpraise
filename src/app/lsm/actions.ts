'use server'

import { Resend } from 'resend';

const resendApiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function submitLsmRegistration(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const requestTitle = formData.get('requestTitle') as string;
  const requestBody = formData.get('requestBody') as string;

  if (!firstName || !lastName || !email || !phone) {
    return { error: 'Please fill out all required fields.' };
  }

  if (!resend) {
    console.error('RESEND_API_KEY is not set. Could not send email.');
    return { success: true, warning: 'API Key not set. Simulated success.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Chapel of Praise <onboarding@resend.dev>',
      to: ['niceboy235461@gmail.com'], // Using the registered Resend email
      subject: `New LSM Registration from ${firstName} ${lastName}`,
      html: `
        <h2>New Lighthouse School of Ministry Registration</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br />
        <p><strong>Inquiry / Request Title:</strong> ${requestTitle || 'None'}</p>
        <br />
        <p><strong>Details:</strong></p>
        <p>${requestBody ? requestBody.replace(/\n/g, '<br />') : 'None provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: `Email service error: ${error.message}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Submission Error:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
