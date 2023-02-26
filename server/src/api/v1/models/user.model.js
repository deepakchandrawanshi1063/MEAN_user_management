const mongoose = require("mongoose");
const validate = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, min: 5, max: 30 },
  email: {
    type: String,
    unique: [true, "email already exist"],
    validate: {
      validator: function (value) {
        return validate.isEmail(value);
      },
      message: (props) => `${props.value} is not a vaild email id.`,
    },
  },
  phone: {
    type: String,
    trim: true,
    min: 10,
    max: 10,
    validate: {
      validator: function (value) {
        return validate.isMobilePhone(value, ["en-IN"]);
      },
      message: (props) => `${props.value} is not a vaild phone number`,
    },
  },
  dob: { type: Date },
  address: { type: String, trim: true, min: 5, max: 50 },
  gender: { type: String, enum: ["male", "female", "others"] },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
