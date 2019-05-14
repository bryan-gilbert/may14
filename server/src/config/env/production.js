const {API_HOST} = process.env
const {CLIENT_HOST} = process.env

const TRACE_CALLS = false

if (!API_HOST) {
  console.error("Must defined url environment variables for production")
}
if (!CLIENT_HOST) {
  console.error("Must defined url environment variables for production")
}

module.exports = {
  isDevelop: false,
  isProduction: true,
  traceApiCalls: TRACE_CALLS
}
