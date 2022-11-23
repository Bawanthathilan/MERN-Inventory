const nodeMailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  //create email transporter
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "bawantharathnayaka@gmail.com",
      pass: "1998102910@aB",
    },
  });

  //options for email
  const options = {
    from: sent_from,
    to: send_to,
    reply_to: reply_to,
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
