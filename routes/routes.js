const express = require("express");
const Controller = require("./../controllers/controller");
const auth = require('../middleware/auth')
const router = express.Router();
router.post("/login/dataapi",Controller.Login);
router.post("/login/sales",auth,Controller.salesTransactionEntry);
router.post("/login/payment",auth,Controller.paymentTransactionEntry);
module.exports = router