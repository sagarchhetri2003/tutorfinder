// const router = require("express").Router();

// const {
//   getUsers,
//   getTutors,
//   deleteUser,
//   approveDisapproveTutor,
// } = require("../controllers/adminController");
// const authGuard = require("../middleware/authGuard");

// router.get("/allUsers", authGuard, getUsers);
// router.get("/allTutors", authGuard, getTutors);
// router.delete("/deleteUsers/:id", authGuard, deleteUser);
// router.get("/approve-disapprove/:id", authGuard, approveDisapproveTutor);

// module.exports = router;

const router = require("express").Router();
const {
    getUsers,
    getTutors,
    deleteUser,
    approveDisapproveTutor,
    getAllReviews,
    deleteReview
} = require("../controllers/adminController");
const authGuard = require("../middleware/authGuard");

// Existing routes
router.get("/allUsers", authGuard, getUsers);
router.get("/allTutors", authGuard, getTutors);
router.delete("/deleteUsers/:id", authGuard, deleteUser);
router.get("/approve-disapprove/:id", authGuard, approveDisapproveTutor);

// New review management routes
router.get("/allReviews", authGuard, getAllReviews);
router.delete("/deleteReview/:id", authGuard, deleteReview);

module.exports = router;