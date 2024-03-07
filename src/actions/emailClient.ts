"use server";

const sgMail = require("@sendgrid/mail");

export const sendEmail = async (email: string, subject?: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "jasonmorales88j@gmail.com",
    subject: subject,
    templateId: process.env.SENDGRID_TEMPLATE_ID,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
};
