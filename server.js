const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const sequelize = require("./config/db");
require("./models/taskModel");

sequelize.sync().then(() => {
  console.log("DB synced");
});

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
