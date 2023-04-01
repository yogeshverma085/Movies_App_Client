const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
// const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const mongoose = require("mongoose");
const app = express();

//config dotenv
dotenv.config();

// connection mongodb
// connectDB();
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull".bgCyan.white))
  .catch((err) => console.error(err));
// console.log(`error: ${error.message}`.bgRed.white);

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

//to serve the frontend
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const port = process.env.PORT || 8800;
app.listen(port, async () => {
  // try {
  //   await connectDB();
  console.log(
    `server running on mode on port ${process.env.PORT}`.bgMagenta.white
  );
  // } catch (e) {
  //   console.log(e.message);
  // }
});
