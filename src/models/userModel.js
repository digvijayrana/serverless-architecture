const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String,required: 'Please Supply an email address', unique: true,lowercase: true,trim: true},
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);