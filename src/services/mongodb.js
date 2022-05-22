const { connect: mongooseConnect } = require('mongoose')
// const SSM = require('./../services/ssm')
const mongoose = require('mongoose')

class Mongoose {
    constructor() {
        this.options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }

    connect() {
        new Promise(async (resolve, reject) => {
            // const ssm = new SSM()
            let MONGO_URL = process.env.MONGO_URL
            resolve(mongooseConnect(MONGO_URL, { ...this.options })
                .catch((error) => {
                    console.log('DB:', error)
                    reject(error)
                }))
        }).then()
    }

    async disconnect() {
        await mongoose.disconnect()
    }
}

module.exports = Mongoose