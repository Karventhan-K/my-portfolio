import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const sanitize = (str) => {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // 1. Validation
        if (!name || name.trim().length < 2) {
            return NextResponse.json({ message: 'Name must be at least 2 characters.' }, { status: 400 });
        }
        if (!email || !validateEmail(email)) {
            return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
        }
        if (!message || message.trim().length < 10) {
            return NextResponse.json({ message: 'Message must be at least 10 characters.' }, { status: 400 });
        }

        // 2. Sanitization
        const cleanName = sanitize(name.trim());
        const cleanEmail = sanitize(email.trim());
        const cleanMessage = sanitize(message.trim());

        // 3. Fallback if env vars aren't set (Dev mode)
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('DEV MODE - Email would have been sent:');
            console.log('To:', 'Admin');
            console.log('From:', cleanEmail);
            console.log('Message:', cleanMessage);
            return NextResponse.json({ message: 'Message received (Dev Mode - Credentials missing).' }, { status: 200 });
        }

        // 4. Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: cleanEmail,
            subject: `New Portfolio Contact from ${cleanName}`,
            text: `
        Name: ${cleanName}
        Email: ${cleanEmail}
        Message: ${cleanMessage}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
}
