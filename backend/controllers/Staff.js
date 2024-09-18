const Staff = require("../model/Staff");

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.status(200).json(staffs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getSingleStaff = async (req, res) => {
  try {
  } catch (err) {}
};
