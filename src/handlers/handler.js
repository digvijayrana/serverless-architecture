'use strict';
const Mongoose = require('../services/mongodb')

const user = (event, context, callback) => {
  const mongoose = await Mongoose()
  await mongoose.connect()

  const users = JSON.parse(event.body)
  console.log(users)

}

module.exports = { user }


