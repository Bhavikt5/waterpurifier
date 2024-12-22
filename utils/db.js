const mongoose = require("mongoose");

//const connectDatabase is made in which mongodb server is made with mongoose module
const connectDatabase = () => {
  console.log("mongo connecting");

  mongoose.connect(
    "mongodb+srv://admin-bhavik:mongodbpassword@cluster1.hju2b.mongodb.net/"
  );
};

module.exports = connectDatabase;
