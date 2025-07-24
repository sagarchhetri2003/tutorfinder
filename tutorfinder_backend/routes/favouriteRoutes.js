const express = require("express");
const router = express.Router();
const { toggleFavourite, getFavourites } = require("../controllers/favouriteController");
const authGuard = require("../middleware/authGuard");

// Fixed: Changed from GET to POST for toggle operation
router.post("/toggle/:tutorId", authGuard, toggleFavourite);
router.get("/all", authGuard, getFavourites);

module.exports = router;