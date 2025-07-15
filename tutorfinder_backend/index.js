const express = require("express");
const path = require("path");
const cors = require("cors");
const moment = require("moment");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

dotenv.config();

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ limit: "40mb", extended: true }));

const corsPolicy = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsPolicy));

app.use("/uploads", (req, res, next) => {
  express.static(path.resolve(__dirname, "uploads"))(req, res, next);
});

connectDB();

const port = process.env.PORT;

// user routes
app.use("/api/user", require("./routes/userRoutes"));

// booking routes
app.use("/api/booking", require("./routes/bookingRoutes"));

// admin routes
app.use("/api/admin", require("./routes/adminRoutes"));

// favourite routes
app.use("/api/favourite", require("./routes/favouriteRoutes"));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
