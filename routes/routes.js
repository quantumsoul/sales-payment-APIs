const express = require("express");
const Controller = require("./../controllers/Controller");
const auth = require('../middleware/auth')
const router = express.Router();
router.post("/login/dataapi?grant_type=token",Controller.Login);
router.post("/login/dataapi?grant_type=Sales",auth,Controller.salesTransactionEntry);
router.post("/login/dataapi?grant_type=Payment",auth,Controller.paymentTransactionEntry);
module.exports = router