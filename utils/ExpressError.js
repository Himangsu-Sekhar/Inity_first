// class ExpressError extends Error {
//   constructor(statusCode, message) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// module.exports = ExpressError;

// utils/ExpressError.js
class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message); // set message in Error
        this.statusCode = statusCode; // custom status code
    }
}

module.exports = ExpressError;
