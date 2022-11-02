const express = require('express');
const app = express();
var nodeMailer = require('nodemailer'); 


var usermail;

const route = require('./routes');

    console.log("called");

    const outputtexture =
        `<div class="box">
         <h1>Daily Coding problem</h1>
         <h2>Day </h2>
         <br>
         <hr>
         <h2>Problem Details</h2>
         <h2></h2><br>
           <h1>Thank you for registering</h1>
           <h4></h4>
           <hr>
         </div>
       `;

// var transporter = nodeMailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//         auth: {
           
//         }
// });
    
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'nadarajrajalakshmi@gmail.com',
        pass: 'fvolstfhptiyqizc'
    }
};

var transporter = nodeMailer.createTransport(smtpConfig);


    var mailOptions = {
        from: '"Code props" nadarajrajalakshmi@gmail.com',
        to: ['prathiyankara.r@gofrugal.com'],
        bcc: usermail,
        subject: 'Make you Amaze',
        text: "Your Question",
        html: outputtexture
    };

    transporter.sendMail(mailOptions, function (error, info) {
        console.log("mail")
        if (error) {
            console.log("error"+error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });




const PORT = process.env.PORT || 4999;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})