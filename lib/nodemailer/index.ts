import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

export const mailOptions = (email:string, name:string, message:string) => {
  return {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'From Portfolio',
    text: `Sender: ${email}\nName:${name}\n\n${message}`
  }
};

