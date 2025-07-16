const router = require("express").Router();
// use authguard middleware to use req.user.id in the controller functions

// import the controller functions
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
} = require("../controllers/userController");

// import the multer upload middleware
const upload = require("../middleware/upload");

// import the authentication middleware
const authGuard = require("../middleware/authGuard");
const { forgotPassword, resetPassword } = require("../controllers/userController");

const { getTutorById } = require("../controllers/userController");




router.post("/register", upload.single("image"), registerUser);
router.post("/login", loginUser);
router.put("/update", authGuard, upload.single("image"), updateUser);
router.put("/update-password", authGuard, updateUserPassword);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/tutor/:id", getTutorById);
router.post(
  "/signup-as-tutor",
  authGuard,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
   
  signUpAsTutor
);
router.get("/details/:userId", authGuard, getUserDetails);

router.get("/search-tutors", searchTutors);

router.get("/all-tutors", allTutors);

router.get("/tutor-details/:tutorId", getTutorDetails);

router.post("/contact", authGuard, createContact);

router.get("/my-contacts", authGuard, myContacts);
router.delete("/delete-contact/:id", authGuard, deleteContactController);



router.get("/my-bookings", authGuard, myBookings);

router.post("/add-review", authGuard, addReviews)

router.get("/get-review/:id", getReviewFromId)

module.exports = router;