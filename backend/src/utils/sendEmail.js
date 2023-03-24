import nodemailer from "nodemailer";

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({ fullName, email, message }) => {
  const options = {
    from: `Medi Channeller 🚑 <${process.env.USER}>`,
    to: email,
    subject: "Reset password link",
    html: `
        <div style="width: 100%; background-color: #2986cc; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://res.cloudinary.com/wizardxd/image/upload/v1678476675/New/34657527_19nov_2_hk1uhl.jpg"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              Medi channeller
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Password link: <b>${fullName}</b></p>
              
              
              <p>Message: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };

  Email(options);
};

export default EmailSender;
