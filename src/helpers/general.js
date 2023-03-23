const moment = require('moment')
const { randomBytes } = require('crypto')



/**
 * It takes in a status code, a body, a status, and a description, and returns a JSON response with the status code,
 * headers, and body
 * @param statusCode - The HTTP status code of the response.
 * @param body - The body of the response.
 * @param [status=Success] - This is the status code of the response.
 * @param [description=Call forwarding API 2.0] - The description of the API
 * @returns A function that takes in 3 parameters and returns an object.
 */
const mapToJsonResponse = (statusCode, body, status = 'Success', description = 'Call forwarding API 2.0') => {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      result: {
        status: status,
        message: status > 0 ? 'success' : 'failure',
        data: {
          ...body
        }
      }
    })
  }
}

/**
 * It takes a mobile number as input and returns a 10 digit mobile number
 * @param mobile - The mobile number to be trimmed.
 * @returns the mobile number after trimming it.
 */
const trimMobile = (mobile) => {
  let trimMobile = mobile
  if (trimMobile && trimMobile.length > 0) {
    trimMobile = trimMobile.replace(/[^0-9]/g, '')
    if (trimMobile.length >= 10) {
      trimMobile = trimMobile.substr(trimMobile.length - 10)
    }
  }
  return trimMobile
}

/**
 * Return the current time in milliseconds
 * @returns The current time in milliseconds.
 */
const now = () => {
  return new Date().getTime()
}

/**
 * It takes a number of seconds and returns a string in the format of H:mm:ss
 * @param seconds - The number of seconds to convert to a human readable format.
 * @returns A string in the format of H:mm:ss
 */
const convertSecondsToHuman = (seconds) => {
  return moment().startOf('day')
    .seconds(seconds)
    .format('H:mm:ss')
}




module.exports = {
  mapToJsonResponse,
  trimMobile,
  now,
  convertSecondsToHuman
}