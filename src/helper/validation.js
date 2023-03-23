const {Validator} = require('jsonschema')

const validate = async (data, schema) => {
    try {
        let requestBody = data
        if (typeof data === 'string' || data instanceof String) {
            requestBody = JSON.parse(data)
        }
        requestBody = Object.entries(requestBody).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {})
        const validator = new Validator()
        await validator.validate(requestBody, schema, {throwAll: true})
    } catch (error) {
        throw error.errors.map(function (err) {
            if (err.name === 'required') {
                return `The ${err.argument} is required and cannot be empty`
            }
            if (err) {
                return err.stack.replace('instance.', '')
            }

        });
    }
}

module.exports = validate
