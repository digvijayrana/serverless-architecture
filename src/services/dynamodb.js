const AWS = require('./aws')

class DynamoDB {
    constructor() {
        const options = {region: process.env.CLOUD_REGION}
        this.dynamodb = new AWS.DynamoDB(options)
        this.docClient = new AWS.DynamoDB.DocumentClient({service: this.dynamodb})
    }

    create(params) {
        return new Promise((resolve, reject) => {
            this.docClient.put(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    update(params) {
        return new Promise((resolve, reject) => {
            this.docClient.update(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    delete(params) {
        return new Promise((resolve, reject) => {
            this.docClient.delete(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    get(params) {
        return new Promise((resolve, reject) => {
            this.docClient.get(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    query(params) {
        return new Promise((resolve, reject) => {
            this.docClient.query(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    scan(params) {
        return new Promise((resolve, reject) => {
            this.docClient.scan(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    async queryItems(params) {
        let items = []
        let lastEvaluatedKey = null
        do {
            params.ExclusiveStartKey = lastEvaluatedKey
            const document = await this.query(params)
            items = [...items, ...document.Items]
            lastEvaluatedKey = document.LastEvaluatedKey
        } while (lastEvaluatedKey)
        return items
    }

    async scanItems(params) {
        let items = []
        let lastEvaluatedKey = null
        do {
            params.ExclusiveStartKey = lastEvaluatedKey
            const document = await this.scan(params)
            items = [...items, ...document.Items]
            lastEvaluatedKey = document.LastEvaluatedKey
        } while (lastEvaluatedKey)
        return {Items: items}
    }

}

module.exports = DynamoDB
