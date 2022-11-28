const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 export default async (req, res) => {
   const { firstName, lastName, email, message } = req.body;
   const msg = {
     to: 'yevstrilets@gmail.com',
     from: 'eugenearcher3@gmail.com',
     subject: `${firstName + lastName} sent you a message`,
     text: email,
     html: `<!DOCTYPE>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    </head>
    <body>
      <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${firstName + lastName}, their email is: ✉️${email} </h3>
            <div style="font-size: 16px;">
            <p>${message}</p>
            <br>
            </div>
    </body>
    </html>`,
   };
   try { 
    await sgMail.send(msg)
    res.status(200).json({ success: true })
   } catch(err) { 
    res.status(200).json({ success: false })
    console.log(err)
   }
 };