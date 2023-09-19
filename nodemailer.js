var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dianadenezrosso02@gmail.com',
    pass: 'rikk ytay xlrf bxkm'
  }
});

var mailOptions = {
  from: 'dianadenezrosso02@gmail.com',
  to: 'isabeliccolleoni@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'top ;0'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 