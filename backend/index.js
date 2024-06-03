const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 2000;
require("dotenv").config();
require("./connection/conn");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Routes
app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
