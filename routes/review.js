const express = require("express");
const router = express.Router( {mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isloggedIn, isReviewAuthor } = require("../loginMiddleware.js");
const {validateReview} = require("../validateMiddleware.js");
const { createReview, deleteReview } = require("../controllers/reviews.js");

//post route
router
    .route("/reviews")
    .post( isloggedIn, validateReview, wrapAsync(createReview));
//Delete Review Route
router
    .route("/reviews/:reviewId")
    .delete(isloggedIn, isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;