const express = require("express");
const dotenv = require("dotenv").config({});
const cors = require("cors");
const connectToDB = require("./src/api/v1/configs/dbConnect");
const apis = require("./src/api/v1/routes/user.route");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
connectToDB();
const port = process.env.PORT || 5000;
app.use("/api/v1", apis);

app.listen(port, () => {
  console.log("server is running on port :", port);
});
