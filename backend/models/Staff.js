const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: "Email is required!",
      unique: true,
    },
    phone: {
      type: String,
      required: "Phone Number is required!",
      unique: true,
    },

    emergencyContact: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      relation: {
        type: String,
        required: true,
      },
    },

    jobTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    hiredAt: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "On Leave", "Retired", "Resigned"],
    },
    shift: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening", "Night"],
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    profile: {
      public_id: {
        type: String,
        required: true,
        default: "",
      },
      url: {
        type: String,
        required: true,
        default: "",
      },
    },
  },
  {
    timestamps: true,
    collection: "staffs",
  }
);
