const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserScema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "Please add a valid email",
      ],
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be at least 6 characters"],
      maxLenght: [23, "Password must be less than 23 characters"],
    },

    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png",
    },

    phone: {
      type: String,
      default: "+94",
    },

    bio: {
      type: String,
      maxLenght: [250, "Bio must be less than 200 characters"],
      default: "bio",
    },
  },
  {
    timestamps: true,
  }
);

UserScema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", UserScema);
module.exports = User;
