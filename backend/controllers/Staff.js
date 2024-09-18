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

// Get single staff by ID
exports.getSingleStaff = async (req, res) => {
  try {
    const staff = await Staff.FindById(req.params.id);

    if (!staff) {
      return res.status(404).json({ msg: "Staff not found" });
    }
    res.status(201).json(staff);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Add staff
exports.createStaff = async (req, res) => {
  try {
    const {
      fname,
      lname,
      gender,
      dob,
      address,
      email,
      phone,
      contactName,
      contactPhone,
      contactRelation,
      jobTitle,
      department,
      hiredAt,
      status,
      shift,
      salary,
    } = req.body;
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Update staff by ID
exports.updateStaffByID = async (req, res) => {
  try {
    const {
      fname,
      lname,
      gender,
      dob,
      address,
      email,
      phone,
      contactName,
      contactPhone,
      contactRelation,
      jobTitle,
      department,
      hiredAt,
      status,
      shift,
      salary,
    } = req.body;
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete staff by ID
exports.deleteStaffById = async (req, res) => {
  try {
    const staff = await Staff.FindByIdAnDelete(req.params.id);

    if (!staff) {
      return res.status(404).json({ msg: "Staff not found" });
    }

    res.status(201).json({ msg: "Staff successfully deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
