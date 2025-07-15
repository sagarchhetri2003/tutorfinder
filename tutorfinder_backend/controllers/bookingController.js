const Booking = require("../model/bookingModel");
const Users = require("../model/userModel");

exports.createBooking = async (req, res) => {
  const { tutorId, fromDate, toDate, time } = req.body;
  const userId = req.user.id;
  try {
    if (!tutorId || !fromDate || !toDate || !time) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const tutor = await Users.findById(tutorId);
    if (!tutor) {
      return res
        .status(404)
        .json({ success: false, message: "Tutor not found" });
    }
    const existingBooking = await Booking.findOne({
      tutor: tutorId,
      fromDate: { $lte: toDate },
      toDate: { $gte: fromDate },
      time,
    });
    if (existingBooking) {
      return res
        .status(400)
        .json({ success: false, message: "This time slot is already booked" });
    }
    const userBooking = await Booking.findOne({
      user: userId,
      fromDate: { $lte: toDate },
      toDate: { $gte: fromDate },
      time,
    });
    if (userBooking) {
      return res
        .status(400)
        .json({
          success: false,
          message: "You already have a booking in this time slot",
        });
    }
    const newBooking = new Booking({
      user: userId,
      tutor: tutorId,
      fromDate,
      toDate,
      time,
    });
    await newBooking.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Booking created successfully",
        booking: newBooking,
      });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
