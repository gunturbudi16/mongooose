const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//var uniqueValidator = require("mongoose-unique-validator");
console.log("masok model user");
var addressSchema = new Schema(
  {
    address: { type: String, required: true }
  },
  { timestamps: true }
);

//userSchema.plugin(uniqueValidator);
const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
