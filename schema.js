const Joi = require('joi');
const { model } = require('mongoose');


const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required(),
        Image: Joi.string().allow("",null)
    }).required()
});

// module.exports = listingSchema;

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required()  
})

// module.exports = reviewSchema;

module.exports = { listingSchema, reviewSchema };