const sg = require('@sendgrid/mail')
sg.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
    send: (req, res) => {
        console.log('hit')
        const {from, subject, text} = req.body

        const msg = {
            to: 'phoenix.oconnell@gmail.com',
            from,
            subject,
            text
        }

        sg.send(msg, (err) => {
            if(err) {
                console.log('Sending email:', err)
                res.status(500).json({message: 'Could not send message'})
            } else {
                res.status(200).json({message: 'Message sent!'})
            }
        })
    }
}