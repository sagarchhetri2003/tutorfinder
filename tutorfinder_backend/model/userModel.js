const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "tutor", "admin"],
      default: "user",
    },
    subject: {
      type: String,
    },
    teachingMode: {
      type: String,
      enum: ["Online", "Offline", "Both"],
      default: "Both",
    },
    availability: {
      type: String,
      enum: ["Weekdays", "Weekends", "Flexible"],
      default: "Flexible",
    },
    gender: {
      type: String,
    },
    certificate: {
      type: String,
    },
    aboutYou: {
      type: String,
    },
    aboutLesson: {
      type: String,
    },
    price: {
      type: String,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);
module.exports = Users;
