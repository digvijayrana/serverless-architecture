const axios = require('axios')
class ParseAxios {
    constructor() {
        const defaultOptions = {
            baseURL: process.env.PARSE_URL + '/parse',
            headers: {
                'Content-Type': 'application/json',

                'X-Parse-Application-Id': process.env.PARSE_TOKEN
            }
        }
        this.axios = axios.create(defaultOptions)
    }
    async post(endpoint, requestBody, headers) {

        return this.axios.post(endpoint, requestBody, { headers })

    }

}


module.exports = ParseAxios