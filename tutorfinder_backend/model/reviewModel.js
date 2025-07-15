const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    tutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    review: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("reviews", reviewSchema)
module.exports = Review
