const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    displayName: { type: String, required: true },
    name: { type: String, required: true },
    properties: { type: Object, required: true },
    description: { type: String, required: true },
    reason: { type: Array, required: true },
    howtofix: { type: Array, required: true },
    medicines: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", Users);
