const { connect: mongooseConnect } = require('mongoose')
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
            let MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://digvijaygaur:ydIdU7aXCwnWpglD@cluster0.guash.mongodb.net/job?authSource=admin&replicaSet=atlas-vsho68-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
            console.log(MONGO_URL)
            resolve(mongooseConnect(MONGO_URL, { ...this.options })
                .catch((error) => {
                    console.log('DB:', error.message)
                    reject(error)
                }))
        }).then()
    }

    async disconnect() {
        await mongoose.disconnect()
    }
}

module.exports = Mongoose