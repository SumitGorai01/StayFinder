const express = require("express");
const router = express.Router( { mergeParams:true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
// const {listingSchema} = require("../schema.js");
const {
  validateReview, 
  isLoggedIn, 
  isReviewsAuthor
} = require ("../middleware.js");

const reviewController = require("../controllers/reviews.js");
const reviw = require("../models/review.js");

//post review rought

router.post( 
  "/",
   validateReview,
   isLoggedIn,
   wrapAsync (reviewController.createReview)
  );
  
  
  //Delete review rought
  
  router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewsAuthor,
    wrapAsync(reviewController.destroyReview)
  );

  module.exports = router;