const Listing = require("../models/listing.js");
const { cloudinary } = require("../cloudConfig.js");


//index route method
index = async (req,res)=>{
    const allListings = await  Listing.find({});
    res.render("../views/listings/index.ejs",{allListings});
};
//to show a listing
showlisting = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {
        path: "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing Doesn't exists");
        return res.redirect("/listings");
    }
    res.render("../views/listings/show.ejs", {listing})
};
//to show add new listing form
renderCreateNew = (req, res)=>{
    res.render("../views/listings/new.ejs");
};
//to add a new listing
createNew = async(req, res) => {
            let url = req.file.path;
            let filename = req.file.filename;
            const newListing = new Listing(req.body.listing);
            newListing.Image = {url,filename};
            newListing.owner = req.user._id;
            await newListing.save();
            req.flash("success", "New Listing Created!"); 
            res.redirect("/listings");
};
//render edit listing form
renderEdit = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Doesn't exists");
        return res.redirect("/listings");
    }
    // let originalImgUrl = listing.Image.url;
    // originalImgUrl = originalImgUrl.replace("/upload","/upload/w_250");
    // console.log(originalImgUrl);
    res.render("../views/listings/edit.ejs", {listing});
}
//execute Edit task
updateListing = async(req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file != "undefined"){
        await cloudinary.uploader.destroy(listing.Image.filename);
        let url = req.file.path;
        let filename = req.file.filename;
        listing.Image = {url,filename};
        listing.owner = req.user._id;
        await listing.save();
    }
    req.flash("success", "Listing Updated Successfully!"); 
    res.redirect(`/listings/${id}`);
}
//delete Listing
deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the listing first
    const listing = await Listing.findById(id);

    // If listing exists and has an image, delete it from Cloudinary
    if (listing && listing.Image && listing.Image.filename) {
      await cloudinary.uploader.destroy(listing.Image.filename);
      console.log("🗑️ Deleted image from Cloudinary:", listing.Image.filename);
    }

    // Now delete the listing from the database
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  } catch (err) {
    console.error("Error deleting listing:", err);
    req.flash("error", "Something went wrong while deleting.");
    res.redirect("/listings");
  }
};
// async (req,res) =>{
//     let {id} = req.params;
//     await Listing.findByIdAndDelete(id);
//     req.flash("success", "Listing Deleted!"); 
//     res.redirect("/listings");
// };


module.exports = {index, renderCreateNew,showlisting,createNew,renderEdit,updateListing,deleteListing};