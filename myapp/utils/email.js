const nodemailer = require('nodemailer');

const sendPasswordResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: 'no-reply@yourdomain.com',
    to: email,
    subject: 'Password Reset',
    html: `
      <p>Hi,</p>
      <p>Please click the button below to reset your password:</p>
      <a href="http://localhost:3001/reset-password/${token}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">
        Reset Password
      </a>
      <p>If you did not request a password reset, please ignore this email.</p>
      <p>Thanks,<br/>Your Company</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error; // Ensure errors are propagated back for handling
  }
};

module.exports = { sendPasswordResetEmail };
