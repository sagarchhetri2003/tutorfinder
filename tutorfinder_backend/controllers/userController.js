const Users = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Contact = require("../model/contactModel");
const Booking = require("../model/bookingModel");
const Review = require("../model/reviewModel");
const transporter = require("../middleware/mailConfig.js");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
exports.registerUser = async (req, res) => {
  const { name, email, number, location, password, role } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    if (!name || !email || !number || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const generateSalt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, generateSalt);

    const user = new Users({
      name,
      email,
      number,
      location,
      password: encryptedPassword,
      role,
      image,
    });

    await user.save();

    //  Send welcome email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "🎉 Welcome to TutorFinder!",
      html: `<h3>Hello ${name},</h3>
             <p>Your TutorFinder account has been created successfully.</p>
             <p>Start finding or becoming a tutor today!</p>
             <br><small>— The TutorFinder Team</small>`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(" Welcome email sent to", email);
    } catch (emailError) {
      console.error(" Failed to send welcome email:", emailError);
  
    }

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await Users.findOne({ email });
    console.log("User found:", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN_SECRET);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: user,
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Generate token
    const token = crypto.randomBytes(20).toString("hex");

    // Set token and expiry on user model
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send reset email
    const resetLink = `http://localhost:3000/reset-password/${token}`;


    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Your Password – TutorFinder",
      html: `
        <p>Hello ${user.name},</p>
        <p>You requested to reset your password. Click the link below to reset it:</p>
        <a href="${resetLink}" target="_blank">${resetLink}</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you did not request this, please ignore this email.</p>
        <br><small>– The TutorFinder Team</small>
      `,
    };
    

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Reset link sent to your email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await Users.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // not expired
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(newPassword, salt);
    user.password = encryptedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



exports.updateUser = async (req, res) => {
  const { name, email, number, location, subject } = req.body;
  console.log(req.body)
  const userId = req.user.id;
  const image = req.file ? req.file.path : null;

  try {
    if (!name || !email || !number || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedUser = await Users.findByIdAndUpdate(
      userId,
      { name, email, number, image, location, subject },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const id = req.user.id;

    if (!currentPassword || !newPassword) {
      return res.json({
        success: false,
        message: "Please enter both old and new passwords",
      });
    }

    const user = await Users.findById(id);

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Invalid current password",
      });
    }

    const generateSalt = await bcrypt.genSalt(10);
    const encryptedNewPassword = await bcrypt.hash(newPassword, generateSalt);

    await Users.findByIdAndUpdate(id, { password: encryptedNewPassword });

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.getTutorById = async (req, res) => {
  try {
    const tutor = await Users.findById(req.params.id).select("image number location email role isApproved name");

    if (!tutor) {
      return res.status(404).json({ success: false, message: "Tutor not found" });
    }

    res.status(200).json({ success: true, tutor });
  } catch (err) {
    console.error("Error fetching tutor:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};




exports.signUpAsTutor = async (req, res) => {
  try {
    const {
      name,
      email,
      number,
      location,
      subject,
      teachingMode,
      availability,
      gender,
      aboutYou,
      aboutLesson,
      price,
    } = req.body;

    const userId = req.user.id;

    if (
      !name ||
      !email ||
      !number ||
      !location ||
      !subject ||
      !teachingMode ||
      !availability ||
      !gender ||
      !aboutYou ||
      !aboutLesson ||
      !price
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const image = req.files?.image?.[0]?.path || null;
    const certificate = req.files?.certificate?.[0]?.path || null;

    const updatedUser = await Users.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        number,
        location,
        subject,
        teachingMode,
        availability,
        gender,
        aboutYou,
        aboutLesson,
        price,
        isApproved: false,
        ...(image && { image }),
        ...(certificate && { certificate }),
        role: "tutor",
      },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Tutor profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in signUpAsTutor:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getUserDetails = async (req, res) => {
  console.log("Fetching user details...");
  try {
    const userId = req.params.userId;
    console.log("Fetching details for user ID:", userId);

    const user = await Users.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User Details", user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.searchTutors = async (req, res) => {
  const { subject, location, teachingMode } = req.query;
  console.log("Searching tutors with filters:", {
    subject,
    location,
    teachingMode,
  });

  try {
    const query = {};
    if (subject) query.subject = subject;
    if (location) query.location = location;
    if (teachingMode) query.teachingMode = teachingMode;
    query.isApproved = true;

    const tutors = await Users.find({ role: "tutor", ...query }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Tutors found",
      tutors,
    });
  } catch (error) {
    console.error("Error searching tutors:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.allTutors = async (req, res) => {
  try {
    const tutors = await Users.find({ role: "tutor" }).select("-password");
    res.status(200).json({
      success: true,
      message: "All tutors fetched successfully",
      tutors,
    });
  } catch (error) {
    console.error("Error fetching all tutors:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getTutorDetails = async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    const tutor = await Users.findById(tutorId).select("-password");
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    const subject = tutor.subject;
    const otherTutors = await Users.find({
      subject: subject,
      _id: { $ne: tutorId },
      role: "tutor",
    }).select("-password");

    res.status(200).json({
      success: true,
      message: "Tutor Details",
      tutor: tutor,
      relatedTutors: otherTutors,
    });
  } catch (error) {
    console.error("Error fetching tutor details:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createContact = async (req, res) => {
  const userId = req.user.id;
  const { tutorId, subject, message } = req.body;
  console.log("Creating contact request:", req.body);
  try {
    if (!tutorId || !subject || !message) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    await Contact.create({
      user: userId,
      tutor: tutorId,
      subject: subject,
      message: message,
    });
    res.status(200).json({
      success: true,
      message: "Request has been submitted.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// exports.myContacts = async (req, res) => {
//   const userId = req.user.id;
//   try {
//     const contacts = await Contact.find({ tutor: userId })
//       .populate("tutor", "name email number location image")
//       .populate("user", "name email number location image")
//       .sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       contacts,
//     });
//   } catch (error) {
//     console.error("Error fetching contacts:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

exports.myContacts = async (req, res) => {
  const userId = req.user.id;
  try {
    const contacts = await Contact.find({ tutor: userId })
      .populate("tutor", "name email number location image")
      .populate("user", "name email number location image")
      .select("message subject tutor user createdAt") 

    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
exports.deleteContactController = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



exports.myBookings = async (req, res) => {
  const userId = req.user.id;
  try {
    const bookings = await Booking.find({ tutor: userId })
      .populate("user", "name email number location image")
      .populate("tutor", "name email number location image")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.addReviews = async (req, res) => {
  console.log(req.body);
  const { tutorId, review } = req.body;
  try {
    const addedReview = new Review({
      user: req.user.id,
      tutor: tutorId,
      review: review,
    });
    await addedReview.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getReviewFromId = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const reviews = await Review.find({ tutor: id }).sort({ createdAt: -1 }).populate("user", "name");
    res.status(200).json({
      success: true,
      message: "Reviews",
      reviews,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

