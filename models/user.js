const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
console.log("masok model user");
var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: [{ type: Schema.Types.ObjectId, ref: "Address" }]
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);
const User = mongoose.model("Users", userSchema);
module.exports = User;
