const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  
  const data = {
    to: 'yevstrilets@gmail.com',
    from: 'hello@yevstrilets.com',
    subject: 'New message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };
  mail.send(data);

  res.status(200).json({ status: 'Ok' });
};

// require('dotenv').config()

// const mail = require('@sendgrid/mail')

// const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) { 
//     const { name, email, message } = req.body;
//     const msg = { 
//         to: TO_EMAIL,
//         from: FROM_EMAIL,
//         subject: 'Nextjs Contact form',
//         html: `<p><strong>Name:</strong>${name}</p>
//         <p><strong>Email:</strong>${email}</p>
//         <p><strong>Message:</strong>${message}</p>
//         `
//     }
//     await mail.send(msg)
//     res.json({success: true});
//     try {
//         await mail.send(data);
//         res.status(200).json({ status: 'OK' });
//       } catch (error) {
//         console.log(error);
//         if (error.response) {
//           console.log(error.response.body);
//         }
//         res.status(400).json({ status: "ERROR", message: error.message });
//       }
// }

// export default (req, res) => { 
//     res.status(200).json({status: 'Ok'})
// }