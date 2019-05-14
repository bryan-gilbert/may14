'use strict'
import express from 'express'
import bodyParser from 'body-parser'
import Config from '../config/config'
import Api from './api'

initUnhandled()
const debug = require('debug')('server')
const {config} = (new Config(process.env.NODE_ENV))
// debug('Full configuration %O', config)

const app = express()
const api = new Api(app, config)

_setupMiddleware(app)

_setupSession(app, config)

api.apiMiddle()
.then(() => {
  debug('api done. Next final routing')
  return api.apiError()
})
.then(() => {
  debug('App setup complete')
  const {port} = config
  app.listen(port, () => {
    debug('Server running...' + port)
  })
})
.catch(error => {
    debug('Error starting server %o', error)
})


function _setupMiddleware(app) {
  // Place holder to sometime later add in i18next translation.
  // for now define a no-op function on the app and by extension on all request objects.
  // Usage:  req.t('some string')
  app.t = txt => {
    return txt
  }
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
}


function _setupSession(app, config) {
  // Sessions and session cookies
  // express-session stores session data here on the server and only puts session id in the cookie
  const session = require('express-session')
  const FileStore = require('session-file-store')(session)

  // Session ids
  const uuid = require('uuid/v4')

  const fileStoreOptions = {}
  if (config.sessionPath) {
    fileStoreOptions.path = config.sessionPath
  }

  if (config.sessionTTL) {
    fileStoreOptions.ttl = config.sessionTTL
  }

  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(
    session({
      genid: () => {
        // Debug('Inside the session middleware req.sessionID ' + req.sessionID)
        return uuid()
      },
      cookie: {sameSite: 'lax'},
      store: app.sessionStore,
      secret: config.cookieSecret,
      resave: false,
      saveUninitialized: false
    })
  )
}

function initUnhandled() {
  /*
  Define application wide handlers for unhandled exceptions and rejections.
  See https://nodejs.org/api/process.html#process_event_unhandledrejection
   */
  if (process.listeners('unhandledRejection') < 2) {
    process.on('unhandledRejection', error => {
      debug('-=-=-=-=-= UNHANDLED REJECTION %s %O', error, error.stack)
    })
  }

  if (process.listeners('uncaughtException') < 2) {
    process.on('uncaughtException', error => {
      debug('.-.-.-.-.-. UNCAUGHT EXCEPTION %s %O', error, error.stack)
    })
  }
}
