const nodeMailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  //create email transporter
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST, // hostname
    port: process.env.EMAIL_PORT,
    // port for secure SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  });

  //options for email
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  //send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
