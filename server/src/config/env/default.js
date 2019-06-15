'use strict'

const pkg = require('../../../package.json')

const KEYWORDS = pkg.keywords.join(',')
const TITLE = pkg.name
const DESCRIPTION = pkg.description

const {API_PORT} = process.env
const {API_HOST} = process.env
const {CLIENT_HOST} = process.env
const {CLIENT_PORT} = process.env
const HTTP_PROTOCOL = process.env.HTTP_PROTOCOL || 'http'
const API_URL = API_HOST ? ( HTTP_PROTOCOL + '://' + API_HOST + (API_PORT ? ':' + API_PORT : '')) : undefined
const CLIENT_URL = CLIENT_HOST ? (HTTP_PROTOCOL + '://' + CLIENT_HOST + (CLIENT_PORT ? ':' + CLIENT_PORT : '')) : undefine

const {MONGODB_PORT} = process.env
const {MONGODB_HOST} = process.env
const MONGODB_DEBUG = process.env.MONGODB_DEBUG || false
const {MONGODB_NAME} = process.env
const COOKIE_SECRET =
  process.env.COOKIE_SECRET || 'this is the secret for the session cookie'
const {MONGODB_USER} = process.env
const {MONGODB_PWORD} = process.env

module.exports = {
  app: {
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS
  },
  cookieSecret: COOKIE_SECRET,
  port: API_PORT,
  apiUrl: API_URL,
  clientUrl: CLIENT_URL,

  seedDB: true,

  database: {
    name: MONGODB_NAME,
    host: MONGODB_HOST,
    port: MONGODB_PORT,
    user: MONGODB_USER,
    password: MONGODB_PWORD,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true
    },
    debug: MONGODB_DEBUG
  },

  // TODO add email support ....
  mailer: {
    enabled: false, // Change this flag to true to turn emailing feature on.

    // if enabled = true make sure to configure one of the methods below
    from: 'noreply@app.com'
    /*
    Transport: "smtp",
    smtp: {
      host: "mailtrap.io",
      port: 2525,
      auth: {
        user: "",
        pass: ""
      }
    } */

    /* transport: "smtp",
    smtp: {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "",
        pass: ""
      }
    } */

    /*
    transport: "mailgun",
    mailgun: {
      apiKey: '',
      domain: ''
    } */

    /*
    transport: "sendgrid",
    sendgrid: {
      apiKey: ""
    } */
  }
}
