import nodemailer from 'nodemailer';

async function sendEmailCV(tipo) {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    }
  });

  const info = await transport.sendMail({
    from: 'Portafolio - Backend',
    to: process.env.TO,
    subject: 'Portafolio Visto',
    html: `<p>Han visto el portafolio desde ${tipo}</p>`,
  });

  console.log("Message sent: %s", info.messageId);
}

export default sendEmailCV;
