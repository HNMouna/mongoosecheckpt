const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name address is required"],
    default: "foulen",
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    default: "foulen.benfoulen@gmail.com",
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
  },
  age: { type: Number, default: "20" },
  favoriteFoods: { type: [String], default: ["pizza", "choclate", "apple"] },
});

module.exports =mongoose.model("User", userSchema);
