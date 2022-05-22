'use strict';
const Mongoose = require('../../services/mongoose')

const user =  async(event, context, callback) => {
  const mongoose = await new Mongoose()
  await mongoose.connect()

  const body = JSON.parse(event.body)
  console.log(body)

}

module.exports = { user }


