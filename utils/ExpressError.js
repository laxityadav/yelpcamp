class ExpressError extends Error {      //ExpressError is a custom Error class 
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;