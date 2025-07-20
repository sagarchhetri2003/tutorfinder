// const Users = require("../model/userModel");

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await Users.find({ role: "user" }).sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching users",
//     });
//   }
// };

// exports.getTutors = async (req, res) => {
//   try {
//     const tutors = await Users.find({ role: "tutor" }).sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       tutors,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching tutors",
//     });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({
//         success: false,
//         message: "User ID is required",
//       });
//     }

//     const deletedUser = await Users.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "User deleted successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Error deleting user",
//     });
//   }
// };

// exports.approveDisapproveTutor = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!id) {
//       return res.status(400).json({
//         success: false,
//         message: "Tutor ID is required",
//       });
//     }

//     const tutor = await Users.findById(id);

//     if (!tutor || tutor.role !== "tutor") {
//       return res.status(404).json({
//         success: false,
//         message: "Tutor not found",
//       });
//     }

//     tutor.isApproved = !tutor.isApproved;
//     await tutor.save();

//     res.status(200).json({
//       success: true,
//       message: `Tutor has been ${tutor.isApproved ? "approved" : "disapproved"}`,
//     });
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({
//       success: false,
//       message: "Error toggling tutor approval status",
//     });
//   }
// };


const Users = require("../model/userModel");
const Review = require("../model/reviewModel"); // Add this import

exports.getUsers = async (req, res) => {
    try {
        const users = await Users.find({ role: "user" }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching users",
        });
    }
};

exports.getTutors = async (req, res) => {
    try {
        const tutors = await Users.find({ role: "tutor" }).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            tutors,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching tutors",
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }
        const deletedUser = await Users.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
        });
    }
};

exports.approveDisapproveTutor = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Tutor ID is required",
            });
        }
        const tutor = await Users.findById(id);
        if (!tutor || tutor.role !== "tutor") {
            return res.status(404).json({
                success: false,
                message: "Tutor not found",
            });
        }
        tutor.isApproved = !tutor.isApproved;
        await tutor.save();
        res.status(200).json({
            success: true,
            message: `Tutor has been ${tutor.isApproved ? "approved" : "disapproved"}`,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error toggling tutor approval status",
        });
    }
};

// New review management functions
// In adminController.js - Update your getAllReviews function
// In controllers/adminController.js
// In controllers/adminController.js
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate('user')  // Get ALL user fields first to see what's available
      .populate('tutor') // Get ALL tutor fields first to see what's available
      .sort({ createdAt: -1 });
    
    console.log("Sample populated review:", JSON.stringify(reviews[0], null, 2)); // Debug the structure
    
    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews  // Make sure it's 'data' not 'reviews'
    });
  } catch (err) {
    console.log("Error fetching reviews:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching reviews",
    });
  }
};


exports.deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Review ID is required",
            });
        }
        
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({
                success: false,
                message: "Review not found",
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Review deleted successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error deleting review",
        });
    }
};