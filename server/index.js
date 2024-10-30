const express = require("express");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post("/testimonies", (req, res) => {
  const { name, email, testimony } = req.body;

  if (!name.trim() || !email.trim() || !testimony.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jaiyeolapaul68@gmail.com",
      pass: "radt xjng pafq ykxo",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "praisetall5@gmail.com",
    subject: `${name}`,
    text: `${testimony}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending mail" + error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));