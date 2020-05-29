const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SEND_GRI_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amirmaor10@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    
    })

}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amirmaor10@gmail.com',
        subject: 'before canceling the app account',
        text: `Hi ${name}. Let me know if I can do something to keep as a user.`
    
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}