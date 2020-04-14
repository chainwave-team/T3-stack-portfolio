require('dotenv').config()
const mailgun = require('mailgun-js')

const { apiKey, domain, myEmail } = {
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN_NAME,
  myEmail: process.env.MAILGUN_MAIL
}

const mg = mailgun({ apiKey, domain })

// eslint-disable-next-line consistent-return
exports.handler = async (event, context, callback) => {
  try {
    const { email, firstName, lastName, message } = JSON.parse(event.body)
    if (!(email && firstName && lastName && message)) {
      throw new Error('missing param')
    }

    const fullName = `${firstName} ${lastName}`

    const body = await mg.messages().send({
      from: `${fullName} <${email}>`,
      to: myEmail,
      subject: `Nouveau message de ${fullName} via https://juliencaron.eu`,
      text: message
    })

    callback(null, {
      statusCode: 201,
      body: JSON.stringify({ body })
    })
  } catch (err) {
    callback(null, {
      statusCode: 500,
      body: err.toString()
    })
  }
}
