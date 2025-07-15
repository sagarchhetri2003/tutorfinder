const router = require("express").Router();

const {
  getUsers,
  getTutors,
  deleteUser,
  approveDisapproveTutor,
} = require("../controllers/adminController");
const authGuard = require("../middleware/authGuard");

router.get("/allUsers", authGuard, getUsers);
router.get("/allTutors", authGuard, getTutors);
router.delete("/deleteUsers/:id", authGuard, deleteUser);
router.get("/approve-disapprove/:id", authGuard, approveDisapproveTutor);

module.exports = router;