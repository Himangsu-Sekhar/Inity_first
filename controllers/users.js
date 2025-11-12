const User =  require("../models/user");

//signup form render
signUpUserForm = (req,res) =>{
    res.render("users/signup");
};
//do signup
signUpUser = async(req,res) => {
        try{
            let {username, email, password} = req.body;
            const newUser = new User({username, email});
            let registredUser = await User.register(newUser, password);
            req.login(registredUser, (err) => {
                if(err){
                    return next(err);
                }
                req.flash("success", "Welcome to Inity "+req.user.username);
                res.redirect("/listings")
            });
        }catch(e){
            req.flash("error",e.message);
            res.redirect("/signup");
        }
};
//login form render
loginUserForm = (req, res) => {
    res.render("users/login");
};
//login
loginUser = (req, res) => {
        req.flash("success","welcome back!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
};
//logout
logoutUser = (req,res) => {
    req.logOut((err) => {
        if(err){
            return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
})
};
module.exports = {signUpUserForm,signUpUser,loginUserForm,loginUser,logoutUser};