const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedIn, isOwner} = require("../loginMiddleware.js");
const {validateListing} = require("../validateMiddleware.js");
const {index, renderCreateNew, showlisting, createNew, renderEdit, deleteListing} = require("../controllers/listings.js");
const multer  = require('multer')
const{storage} = require("../cloudConfig.js");
const upload = multer({ storage });

//index route //create route
router
    .route("/")
    .get(wrapAsync(index))
    .post(isloggedIn, upload.single("listing[Image]"), validateListing,wrapAsync(createNew));
router
    .route("/new")
    .get(isloggedIn,(renderCreateNew));
//show route //update route //DELETE route
router
    .route("/:id")
    .get(wrapAsync(showlisting))
    .put(isloggedIn,isOwner,upload.single("listing[Image]"),validateListing,wrapAsync(updateListing))
    .delete(isloggedIn, isOwner ,wrapAsync(deleteListing));
//to show the edit form // edit route
router
    .route("/:id/edit")
    .get(isloggedIn , isOwner, wrapAsync(renderEdit));

module.exports = router;