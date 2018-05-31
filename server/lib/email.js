/* The transport service object was made in app.js as var nodemailer. */

var mailer = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 465,
 secure: true,
 auth: {
    type: 'OAuth2',
    user: 'patriotpodiatryemail@gmail.com',
    accessUrl: 'https://www.googleapis.com/robot/v1/metadata/x509/emailercredentials%40patriotpodiatryemailer-204418.iam.gserviceaccount.com'
  }
});