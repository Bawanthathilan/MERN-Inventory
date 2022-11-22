const dotemv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware");
const cookesParser = require("cookie-parser");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookesParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes Middlewares
app.use("/api/users", UserRoute);

//routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//connect to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
