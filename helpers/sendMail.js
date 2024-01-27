const nodemailer = require("nodemailer");

const sendMail = (userMail) => {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "sadeDent <" + process.env.EMAIL_USER + ">",
    to: userMail,
    subject: "sadeDent Login!",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>sadeDent Login</title>
    </head>
    <body>
      <p>Hello,</p>
      <p>You have successfully logged in!</p>
      <p>Best regards, sadeDent Team</p>
    </body>
    </html>
  `,
  };

  transporter.sendMail(mailOptions);
} 

module.exports = sendMail;
