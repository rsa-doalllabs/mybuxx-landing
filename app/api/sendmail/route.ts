/**
 * File: route.ts
 * Project: next-enterprise
 * File Created: Monday February 12th, 2024 | 7:00:08 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday February 12th, 2024 | 7:00:09 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2024
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export default function sendMail(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Destructure the email data from your form submission
  const { name, email, message } = req.body as EmailRequestBody;

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Replace with your mail server SMTP host
    port: parseInt(process.env.SMTP_PORT || '465'), // Replace with your mail server SMTP port
    secure: process.env.SMTP_SECURE === 'true', // Use true if port is 465 (SSL), or false for other ports
    auth: {
      user: process.env.SMTP_USER, // Replace with your SMTP email
      pass: process.env.SMTP_PASS, // Replace with your SMTP password
    },
  });

  // Setup email data
  const mailOptions: nodemailer.SendMailOptions = {
    from: '"MyBuxx Co." <solve@mybuxx.net>', // Sender address
    to: 'solve@mybuxx.net', // List of receivers
    subject: 'New Wait List Request MYBuxx.net', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`, // HTML body content
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    return res.status(200).json({ message: 'Email successfully sent', info });
  });
}
