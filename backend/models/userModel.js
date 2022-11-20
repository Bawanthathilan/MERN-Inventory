const mongoose = required("mongoose");

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

const User = mongoose.model("User", UserScema);
module.exports = User;
