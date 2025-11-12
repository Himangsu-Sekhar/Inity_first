const {listingSchema} = require("./schema");
// const { validate } = require("./models/review.js");
const {reviewSchema} = require("./schema");

validateListing = (req, res, next) => {
        let {error} = listingSchema.validate(req.body);
        // console.log(error);
        if(error){
            const allMessages = error.details.map(el => el.message).join(", ");
            throw new ExpressError(400, allMessages);
        }
            next();
        
};

validateReview = (req, res, next) => {
        let {error} = reviewSchema.validate(req.body);
        // console.log(error);
        if(error){
            const allMessages = error.details.map(el => el.message).join(", ");
            throw new ExpressError(400, allMessages);
        }
            next();
        
};

module.exports = {validateListing, validateReview};