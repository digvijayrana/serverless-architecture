const mongoose = require('mongoose')
const Schema =  mongoose.Schema 
const userSchema = new Schema({
    _id:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        max:10,
        min:10
    },
    _created_at: {type:Date}
})

module.exports = mongoose.model('User',userSchema,'User')