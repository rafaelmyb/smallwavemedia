import nodemailer from "nodemailer";

const ourEmail = process.env.NEXT_PUBLIC_SECRET_KEY_MAILADDRESS;
const ourEmailpass = process.env.NEXT_PUBLIC_SECRET_KEY_MAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: ourEmail,
    pass: ourEmailpass,
  },
});

const mailer = ({ senderMail, title, text }) => {
  const from =
    title && senderMail ? `${title} <${senderMail}>` : `${title || senderMail}`;

  const message = {
    from,
    to: `${ourEmail}`,
    subject: title,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, title, content } = req.body;

  if (!senderMail || !title || !content) {
    res.status(403).send();
    return;
  }

  const mailerRes = await mailer({
    senderMail,
    title,
    text: content,
  });
  res.send(mailerRes);
};