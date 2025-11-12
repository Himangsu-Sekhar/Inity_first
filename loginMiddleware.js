const Listing = require("./models/listing");
const Review = require("./models/review");

isloggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
            req.session.redirectUrl = req.originalUrl;
            req.flash("error", "Login Required");
            return res.redirect("/login");
        }
        next();
};

saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

isOwner =  async(req, res, next) => {
    let { id } = req.params;
        let listing = await Listing.findById(id);
        if(!listing.owner._id.equals(res.locals.currUser._id)){
            req.flash("error", "you don't have permission for the task");
            return res.redirect(`/listings/${id}`);
        }
    next();    
}

isReviewAuthor = async(req,res,next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "you don't have permission for the task");
        return res.redirect(`/lisitings/${id}`);
    }
    next();
};

module.exports ={isloggedIn, saveRedirectUrl, isOwner, isReviewAuthor};