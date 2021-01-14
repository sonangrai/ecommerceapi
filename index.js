const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/dbconnect");
require("dotenv").config();

const app = express();

//Connecting to Database
connectDB();

//Validating json usage
app.use(express.json({ extended: false }));

//App
app.use(cors());

//Routes Decleration
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/product"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
