const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  });

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AYS  backend", device: req.device });
});
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
