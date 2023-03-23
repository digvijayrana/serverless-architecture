'use strict';
const Mongoose = require('../services/mongodb')
const {mapToJsonResponse} = require('../helpers/general')

const user = async (event, context, callback) => {
  try {
    return mapToJsonResponse(200, { message: 'Data accepted successfully' }, 1)
  } catch (error) {
    console.log(error)
    throw error
  }

}

module.exports = { user }


