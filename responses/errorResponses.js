const statusCode = require('http-status-codes');
const {response} = require("express");

const notFoundErrorResponse = (response, error) => {
    error = error || 'Not found'

    return response.status(statusCode.NOT_FOUND).send({
        error: error
    })
}

const internalServerErrorResponse = (response) => {
    response.status(statusCode.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' })
}

module.exports = {
    notFoundErrorResponse,
    internalServerErrorResponse,
}
