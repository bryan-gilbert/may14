'use strict'
const fs = require('fs')
const path = require('path')
const debug = require('debug')('server')

const DEVELOPMENT = 'development'

export default class Config {
  constructor(env) {
    this.env = env
    if (!this.env) {
      this.env = DEVELOPMENT
      debug(
        'NODE_ENV was not defined! Using default development environment'
      )
    }
    debug('importing config for the %s environment', this.env)

    // Load the config
    const defaultConfig = require('../config/env/default')
    let environmentConfig
    try {
      environmentConfig = require('../config/env/'+ this.env)
    } catch (error) {
      debug('Error: %s. Config load failed for %s. Use development ', error, this.env)
      this.env = DEVELOPMENT
      environmentConfig = require('../config/env/'+ this.env)
    }
    // Merge config files
    this.configuration = Object.assign(defaultConfig, environmentConfig)
    this.configuration.env = this.env

    // Validate Secure SSL mode can be used
    Config.validateSecureMode(this.configuration)

    debug('configuration ready %s', this.asStringForLog())
  }

  getConfigFilePath(env) {
    const cwd = path.join(process.cwd(), 'src/config/env')
    return path.join(cwd, env + ".js")
  }


  get config() {
    return this.configuration
  }

  asStringForLog() {
    let tmp = {}
    try {
      tmp = JSON.parse(JSON.stringify(this.configuration))
    } catch (error) {
      debug('Error cloning configuration %o', error)
    }
    const sani = 'sanitizedFor2'
    tmp.cookieSecret = sani
    tmp.database.password = sani
    return JSON.stringify(tmp)
  }

  /**
   * Validate Secure=true parameter can actually be turned on
   * because it requires certs and key files to be available
   */
  static validateSecureMode(config) {
    if (!config.secure || config.secure.ssl !== true) {
      return true
    }

    const privateKey = fs.existsSync(path.resolve(config.secure.privateKey))
    const certificate = fs.existsSync(path.resolve(config.secure.certificate))

    if (!privateKey || !certificate) {
      debug(
        'Error: Certificate file or key file is missing, falling back to non-SSL mode'
      )
      debug(
        'To create them, simply run the following from your shell: sh ./scripts/generate-ssl-certs.sh'
      )
      config.secure.ssl = false
    }
  }
}
