const {API_PORT} = process.env
const {API_HOST} = process.env
const {CLIENT_HOST} = process.env
const {CLIENT_PORT} = process.env
const HTTP_PROTOCOL = process.env.HTTP_PROTOCOL || 'http'

const TRACE_CALLS = true

let defs = {
  isDevelop: true,
  isProduction: false,
  // apiUrl: API_URL,
  // clientUrl: CLIENT_URL,
  traceApiCalls: TRACE_CALLS
}

if (!API_HOST) {
  defs.apiUrl = HTTP_PROTOCOL + '://' + API_HOST + (API_PORT ? ':' + API_PORT : '')
}
if (!CLIENT_HOST) {
  defs.clientUrl = HTTP_PROTOCOL + '://' + CLIENT_HOST + (CLIENT_PORT ? ':' + CLIENT_PORT : '')
}

module.exports = defs
