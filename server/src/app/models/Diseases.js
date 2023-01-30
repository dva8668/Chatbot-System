const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Diseases = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  properties: { type: Object, required: true },
});

module.exports = mongoose.model("diseases", Diseases);
