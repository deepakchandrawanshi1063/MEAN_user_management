const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("DB Connection Error", error);
    });
}

module.exports = connectToDB;
