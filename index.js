const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/dbconnect");
require("dotenv").config();

const app = express();

//Connecting to Database
connectDB();

//App
app.use(cors());

//Routes Decleration
app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
