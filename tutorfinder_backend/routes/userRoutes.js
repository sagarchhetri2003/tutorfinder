

const router = require("express").Router();

// Controllers
const {
  registerUser,
  loginUser,
  updateUser,
  updateUserPassword,
  signUpAsTutor,
  getUserDetails,
  searchTutors,
  allTutors,
  getTutorDetails,
  createContact,
  myContacts,
  myBookings,
  addReviews,
  getReviewFromId,
  deleteContactController,
  forgotPassword,
  resetPassword,
  getTutorById,
  getMyReviews,
  deleteReview,
  editReview,
} = require("../controllers/userController");

// Middleware
const upload = require("../middleware/upload");
const authGuard = require("../middleware/authGuard");

// Routes
router.post("/register", upload.single("image"), registerUser);
router.post("/login", loginUser);

router.put("/update", authGuard, upload.single("image"), updateUser);
router.put("/update-password", authGuard, updateUserPassword);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get("/tutor/:id", getTutorById);
router.get("/details/:userId", authGuard, getUserDetails);
router.get("/search-tutors", searchTutors);
router.get("/all-tutors", allTutors);
router.get("/tutor-details/:tutorId", getTutorDetails);

router.post("/signup-as-tutor", authGuard,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
  signUpAsTutor
);

router.post("/contact", authGuard, createContact);
router.get("/my-contacts", authGuard, myContacts);
router.delete("/delete-contact/:id", authGuard, deleteContactController);

router.get("/my-bookings", authGuard, myBookings);

router.post("/add-review", authGuard, addReviews);
router.get("/get-review/:id", getReviewFromId);
router.get("/my-reviews", authGuard, getMyReviews);
router.delete("/review/:id", authGuard, deleteReview);
router.put("/update-review/:id", authGuard, editReview); 


module.exports = router;
