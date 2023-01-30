const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/HeThong");
    console.log("Successfully connected");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { connect };
