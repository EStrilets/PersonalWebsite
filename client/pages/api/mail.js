const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 export default async (req, res) => {
   const { fullname, email, message } = req.body;
   const msg = {
    to: 'yevstrilets@gmail.com',
    from: 'eugenearcher3@gmail.com',
    subject: `${fullname} sent you a message`,
    text: email,
    html: `<strong>${message}</strong>`
   };
   try { 
    await sgMail.send(msg)
    res.status(200).json({ success: true })
   } catch(err) { 
    res.status(200).json({ success: false })
    console.log(err)
   }
 };