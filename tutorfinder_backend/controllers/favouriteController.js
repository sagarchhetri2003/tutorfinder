const Favourite = require("../model/favouriteModel");

exports.toggleFavourite = async (req, res) => {
  const userId = req.user.id;
  const tutorId = req.params.tutorId;

  try {
    const existing = await Favourite.findOne({ user: userId, tutor: tutorId });

    if (existing) {
      await Favourite.findByIdAndDelete(existing._id);
      return res.status(200).json({
        success: true,
        action: "removed",
        message: "Tutor removed from favourites",
      });
    }

    const fav = await Favourite.create({ user: userId, tutor: tutorId });
    return res.status(201).json({
      success: true,
      action: "added",
      favourite: fav,
      message: "Tutor added to favourites",
    });
  } catch (error) {
    console.error("Error toggling favourite:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getFavourites = async (req, res) => {
  const userId = req.user.id;

  try {
    const favourites = await Favourite.find({ user: userId })
      .populate("tutor", "name email number location image gender subject teachingMode");

    res.status(200).json({
      success: true,
      favourites,
    });
  } catch (error) {
    console.error("Error fetching favourites:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
