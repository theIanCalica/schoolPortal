const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
      maxlength: 255,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      trim: true,
      maxlength: 255,
      match: [/\S+@\S+\.\S+/, "Email format is invalid"], // Validate email format
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
      maxlength: 11,
      match: [
        /^09\d{9}$/,
        "Phone number must be exactly 11 digits long and start with 09",
      ],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: 255,
    },
    body: {
      type: String,
      required: [true, "Body is required!"],
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"], // List of allowed statuses
      default: "pending", // Default value
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "contacts",
  }
);

ContactSchema.index({ email: 1 });

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
