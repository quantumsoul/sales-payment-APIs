const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/routes");
const app = express();
// MIDDLEWARES
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(Router);
module.exports = app;