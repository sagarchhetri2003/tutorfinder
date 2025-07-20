// // const mongoose = require("mongoose");

// // const reviewSchema = mongoose.Schema(
// //   {
// //     user: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "users",
// //     },
// //     tutor: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "users",
// //     },
// //     review: {
// //       type: String,
// //     },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const Review = mongoose.model("reviews", reviewSchema)
// // module.exports = Review

// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "users",       // ← must match your User model registration
//     required: true
//   },
//   tutor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "users",       // ← you reuse the same User model for tutors
//     required: true
//   },
//   review: { type: String, required: true },
//   rating: { type: Number, min: 1, max: 5 },
// }, { timestamps: true });

// // register under the singular "Review" so mongoose uses "reviews" collection
// module.exports = mongoose.model("reviews", reviewSchema);


// In model/reviewModel.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // This should match how your User model is registered
    required: true
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Same as above
    required: true
  },
  review: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
}, { timestamps: true });

// Register as "Review" (singular) so Mongoose uses "reviews" collection
module.exports = mongoose.model("Review", reviewSchema); // Change to "Review"