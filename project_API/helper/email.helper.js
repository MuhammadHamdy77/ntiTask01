const nodemailer = require('nodemailer');


const smtpConfig = {
    service: 'gmail',
    auth: {
        user: 'anaosha416@gmail.com',
        pass: '0113178162Mm**'
    }
}
  

const sendEmailCustom = (reciver , emailTxt , subject) => {

    try{

        const transporter = nodemailer.createTransport(smtpConfig)
        let emailOption = 
        {
        
        from: 'G11TEST',
        to: reciver,
        subject: subject,
        text: emailTxt,
    }
   
        transporter.sendMail(emailOption )
    }
    catch(e){
        console.log(e.message);
    }
}
module.exports = sendEmailCustom