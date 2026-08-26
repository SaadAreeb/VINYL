const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoute = require("./routes/auth.route");
const musicRoute = require("./routes/music.route");
const searchRoute = require("./routes/search.route");
console.log("Search Route:", searchRoute);

const {
    globalLimiter
} = require("./middleware/rateLimit.middleware");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "vinyl-drab.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(globalLimiter);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/auth", authRoute);
app.use("/api/music", musicRoute);
app.use("/api/search", searchRoute);

module.exports = app;