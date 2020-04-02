require('dotenv').config()
const mailgun = require('mailgun-js')

const { apiKey, domain, myEmail } = {
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN_NAME,
  myEmail: process.env.MAILGUN_MAIL
}

const mg = mailgun({ apiKey, domain })

exports.handler = async event => {
  try {
    const { email, name, message } = JSON.parse(event.body)
    if (!(email && name && message)) {
      throw new Error('missing param')
    }

    const body = await mg.messages().send({
      from: `${name} <${email}>`,
      to: myEmail,
      subject: `Nouveau message de ${name} via https://juliencaron.eu`,
      text: message
    })

    return { statusCode: 200, body: JSON.stringify({ body }) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
