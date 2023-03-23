const userModel = require('./userModel')
const Mongoose = require("../services/mongoose")


const getById = async (requestId) => {
    try {
        const mongoose = await new Mongoose()
        await mongoose.connect()
        return await enquiriesModel.findById(requestId)
    } catch (error) {
        console.log('getById', error.message)
        throw error
    }
}

const createUser = async (data) => {
    try {
        const mongoose = await new Mongoose()
        await mongoose.connect()
        return await userModel.create({...data})
    } catch (error) {
        console.log('create user-error',error.message)
        throw error
    }

}
const updateById = async (requestId, params) => {

    try {
        const mongoose = await new Mongoose()
        await mongoose.connect()
        return await enquiriesModel.updateOne({
            _id: requestId
        }, {
            $set: {
                ...params,
                StandardInfoUpdatedAt: new Date()
            }
        })
    } catch (error) {
        throw error
    }
}

const getAll = async (params) => {

    try {
        const mongoose = await new Mongoose()
        await mongoose.connect()
        const limit = params && params.limit ? parseInt(params.limit) : 20
        const page = params && params.page ? parseInt(params.page) : 1
        return await enquiriesModel.find({
            _updated_at: {
                $gte: new Date(params.startDate),
                $lte: new Date(params.endDate)
            }
        }, {}, {
            sort: {
                _created_at: -1
            },
        }
        ).skip(page * limit).limit(limit)
    } catch (error) {
        throw error
    }
}

module.exports = { getById, getAll, updateById, createUser }
