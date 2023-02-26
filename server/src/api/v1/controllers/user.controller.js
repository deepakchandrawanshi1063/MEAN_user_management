const User = require("../models/user.model");

exports.saveUser = async (req, res) => {
  // console.log(req.body);
  const { name, email, phone, dob, address, gender } = req.body;
  if (!name || !email || !phone) {
    return res
      .status(403)
      .json({ success: false, message: "please fill all the fields" });
  }
  try {
    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res
        .status(403)
        .json({ success: false, message: "Account is already esist" });
    }
    const user = new User({ name, email, phone, dob, address, gender });
    const newUser = await user.save();
    if (newUser) {
      return res
        .status(201)
        .json({ success: true, message: "User Account is created" });
    }
  } catch (erroror) {
    res.status(500).json({ success: false, message: erroror });
  }
};

exports.showUser = async (req, res) => {
  try {
    const allUser = await User.find();
    if (allUser) {
      return res.status(200).json({ success: true, data: allUser });
    }
  } catch (erroror) {
    res.status(500).json({ success: false, message: erroror });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { name, email, phone, gender, address } = req.body;
    const updataedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name, email, phone, gender, address } }
    );
    if (updataedUser) {
      return res
        .status(200)
        .json({ success: true, message: "User updated sucessfully." });
    }
    res.status(500).json({ success: false, message: "unable to update user." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, erroror: error });
  }
};

exports.deleteUser = async (req, res) => {
  const ids = req.params.id;
  try {
    const deletedUser = await User.findOneAndDelete({ _id: ids });
    if (!deletedUser) {
      return res
        .status(402)
        .json({ success: false, message: "unable to delete user", ids });
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted sucessfully", ids });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, erroror: error });
  }
};
