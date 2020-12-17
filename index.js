const express = require("express");
const app = express();

//Routes Decleration
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
