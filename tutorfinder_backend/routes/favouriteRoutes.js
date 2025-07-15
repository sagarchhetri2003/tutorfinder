const express = require("express");
const router = express.Router();
const { toggleFavourite, getFavourites } = require("../controllers/favouriteController");
const authGuard = require("../middleware/authGuard");

router.get("/toggle/:tutorId", authGuard, toggleFavourite);
router.get("/all", authGuard, getFavourites);

module.exports = router;
