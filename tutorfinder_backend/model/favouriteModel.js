const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    tutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

favouriteSchema.index({ user: 1, tutor: 1 }, { unique: true });

const Favourite = mongoose.model("Favourite", favouriteSchema);
module.exports = Favourite;
