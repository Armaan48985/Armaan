// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
//     }

//     // Nodemailer Transporter Setup
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: false, // Use `true` for port 465, `false` for port 587
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email Content
//     const mailOptions = {
//       from: `"${name}" <${email}>`, // Sender name and email
//       to: process.env.EMAIL_TO, // Your receiving email
//       subject: `New Contact Form Submission from ${name}`,
//       text: `You have a new message from ${name} (${email}):\n\n${message}`,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong> ${message}</p>`,
//     };

//     // Send Email
//     const info = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', info.response);

//     return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
