const { connect: mongooseConnect } = require('mongoose')
class Mongoose {
  constructor () {
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

  connect () {
    new Promise(async (resolve, reject) => {
      return mongooseConnect(process.env.MONGO_URL || 'mongodb+srv://digvijaygaur:ydIdU7aXCwnWpglD@cluster0.guash.mongodb.net/job?authSource=admin&replicaSet=atlas-vsho68-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', { ...this.options })
        .catch((error) => {
          console.log('DB:', error)
          reject(error)
        })
    }).then(r => console.log(r))
  }
}

module.exports = Mongoose
