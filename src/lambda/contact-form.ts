/* eslint-disable import/prefer-default-export */
import { Handler, APIGatewayEvent } from 'aws-lambda'
import mailgun from 'mailgun-js'

require('dotenv').config()

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: process.env.MAILGUN_DOMAIN_NAME || ''
})

export const handler: Handler = async (event: APIGatewayEvent) => {
  try {
    const { email, firstName, lastName, message } = JSON.parse(
      event?.body || ''
    )
    if (!(email && firstName && lastName && message)) {
      throw new Error('missing param')
    }

    const fullName = `${firstName} ${lastName}`

    const response = await mg.messages().send({
      from: `${fullName} <${email}>`,
      to: process.env.MAILGUN_MAIL || '',
      subject: `Nouveau message de ${fullName} via https://juliencaron.eu`,
      text: message
    })

    return {
      statusCode: 201,
      body: JSON.stringify({ body: response.message })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    }
  }
}
