const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../loginMiddleware");
const {signUpUserForm, signUpUser, loginUserForm, loginUser, logoutUser } = require("../controllers/users");



//show the signup page // do signup
router
    .route("/signup")
    .get((signUpUserForm))
    .post(wrapAsync(signUpUser));
//to show the login page //do login
router 
    .route("/login")
    .get((loginUserForm))
    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login",failureFlash: true,}),(loginUser));
//logout
router
    .route("/logout")
    .get((logoutUser));

module.exports = router;