const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



app.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: "Portfolio Website", // This shows as the sender in your inbox
    to: "omarofah12@gmail.com", // You are sending the email TO yourself
    subject: "New Website Submission",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ status: "Error" });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(5000, () => console.log("Server Running on Port 5000"));