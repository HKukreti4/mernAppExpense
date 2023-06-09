const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("db connected sucessfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
