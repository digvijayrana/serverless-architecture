const mapToJsonResponse = (statusCode, body, status = 'Success') => {
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body,
            status
        })
    }
}

const customError = (code, message) => {
    const error = new Error(message)
    error.code = code

    return error
}

const objectFilter = (obj, predicate) => {
    const filteredObject = Object.keys(obj)
        .filter(key => predicate(obj[key]))
        // eslint-disable-next-line no-return-assign,no-sequences
        .reduce((res, key) => (res[key] = obj[key], res), {})

    return Object.keys(filteredObject)
}

module.exports = {mapToJsonResponse, customError, objectFilter}
