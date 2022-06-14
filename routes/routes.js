const express = require("express");
const Controller = require("./../controllers/controller");
const router = express.Router();
router.post("/login/dataapi",Controller.postapi);
router.get("/login/dataapi", Controller.getapi);
router.post("/login",Controller.login);
module.exports = router