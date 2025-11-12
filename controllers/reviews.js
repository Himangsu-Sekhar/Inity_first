const Listing = require("../models/listing");
const review = require("../models/review.js")

//create review
createReview = async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    listing.reviews.push(newReview);
    newReview.author = req.user._id;
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Added!"); 
    res.redirect(`/listings/${listing._id}`);
};
//delete review
deleteReview = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted."); 
    res.redirect(`/listings/${req.params.id}`);
};

module.exports = {createReview,deleteReview};