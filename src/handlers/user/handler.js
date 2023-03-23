'use strict';
const { mapToJsonResponse } = require('../../helper/general')
const { createUser } = require('../../models/user')
const Mongoose = require('../../services/mongoose')

const user = async (event, context, callback) => {
    try {

        const body = JSON.parse(event.body)
        if (!body) {
            return mapToJsonResponse(400, {}, 'failure', 'Failed')
        }
        const mongoose = await new Mongoose()
        await mongoose.connect()
        let response = await createUser(body)
        return mapToJsonResponse(200, response, 'Success')
    } catch (error) {
        console.log(error.message)
        return mapToJsonResponse(error.error ? error.error.code : 400, error.error ? error.error : error, 'Failure')

    }

}

module.exports = { user }


