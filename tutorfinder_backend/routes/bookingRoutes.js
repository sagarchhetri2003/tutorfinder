const router = require("express").Router();
// use authguard middleware to use req.user.id in the controller functions

// import the controller functions
const {
  createBooking,
} = require("../controllers/bookingController");

// import the authentication middleware
const authGuard = require("../middleware/authGuard");

router.post("/create", authGuard, createBooking);

module.exports = router;