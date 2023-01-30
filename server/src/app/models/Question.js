const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  answer: { type: Object, required: true },
  property: { type: String, required: true },
});

module.exports = mongoose.model("questions", Question);
