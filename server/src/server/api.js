import moment from 'moment'
import cors from 'cors'
// import dbSeeder from '../config/lib/db-seeder'
// import UserController from '../controllers/user-controller'

const debug = require('debug')('server')

export default class Api {
  constructor(app, config) {
    this.app = app
    this.config = config
  }

  apiMiddle() {
    const {app, config} = this
    this._setupTrace()
    return this._seeding().then(() => {
      const corsOptions = this._setupCors()
      // Const router = express.Router() // eslint-disable-line new-cap
      debug('Set up get for / ')
      app.get('/', (req, res) => {
        debug('Got middle a / request')
        let msg = config.app.title + ' message received\n'
        res.send(msg)
      })
      app.get('/reverse', cors(corsOptions), (req, res) => {
        let data = req.query.data
        let resData = ''
        if(data) {
          resData = data.split("").reverse().join("");
        }
        let msg = config.app.title + ' reverse message received ' + data + 'respond with ' + resData + '\n'
        debug(msg )
        res.send(resData)
      })
      // Inside API
      // const user = new UserController(config)
      // app.use('/user', user.route())
      // Router.use('/user', cors(corsOptions), user.route())
    })
  }

  apiError() {
    const {app} = this
    // App.get('/', (req, res) => {
    //   debug('Got error a / request')
    //   res.send('from error\n')
    // })
    // Error handlers
    app.use(fourOhFour)
    app.use(logErrors)
    app.use(clientErrorHandler)
    app.use(errorHandler)

    function logErrors(err, req, res, next) {
      if (!err) {
        return next()
      }

      debug(`Error name: ${err.name} message: ${err.message}`)
      next(err)
    }

    function clientErrorHandler(err, req, res, next) {
      next(err)
      // Or add custom handlers
      // import {AssignmentMismatchError, ParameterError, SystemError} from '../utils/errors'
      // if (err.name === AssignmentMismatchError.NAME()) {
      //   let url = config.clientUrl + '/assignments-listing?user=' + req.user._id
      //   url += '&error=' + err.message
      //   res.redirect(url)
      // } else {
      //   next(err)
      // }
    }

    function errorHandler(err, req, res) {
      res.status(err.status || 500)
      res.send(err.message)
    }

    // Catch 404 and forward to error handler
    function fourOhFour(req, res) {
      const {config} = this
      const {url} = req
      const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
      const env = config.env
      if (url.includes('favicon')) {
        debug('Another request for the favicon')
        res.status(404).send('No favicon')
      } else {
        const msg =
          'Could not find "' + fullUrl + '". Environment: ' + env + '\n\n'
        debug(msg)
        res.status(404).send(msg)
      }
    }
  }

  _setupCors() {
    const {config} = this
    const whitelist = ['http://localhost:8080'] // default HRM vue cli port
    whitelist.push(config.clientUrl)
    whitelist.push(config.apiUrl)
    return function(req, callback) {
      let origin = req.header('Origin')
      console.log('Do cors for origin', origin, whitelist)
      const corsOptions = {origin: false} // Disable CORS by default
      if (whitelist.indexOf(origin) >= 0) {
        corsOptions.origin = true // Reflect (enable) the requested origin in the CORS response
      }
      callback(null, corsOptions) // Callback expects two parameters: error and options
    }
  }

  _seeding() {
    return Promise.resolve()
    // const {config} = this
    // return Promise.resolve()
    //   .then(() => {
    //     if (config.seedDB) {
    //       debug('seeding')
    //       return dbSeeder()
    //     }
    //   })
    //   .then(() => {
    //     if (config.seedDB) {
    //       debug('seeding done')
    //     }
    //   })
  }

  _setupTrace() {
    const {app, config} = this
    config.traceApiCalls = true
    debug('Tracing ?', config.traceApiCalls)
    if (config.traceApiCalls) {
      app.use((req, res, next) => {
        debug(
          'Starting %o method: %s, url %s',
          moment().format('YYYY/MM/DD, h:mm:ss.SSS a'),
          req.method,
          req.url
        )
        next()
      })
    }
  }
}
