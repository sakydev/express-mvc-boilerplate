const logRequestMiddleware = (request, response, next) => {
    console.log('Requested: ' + request.url);

    next();
};

module.exports = logRequestMiddleware;
