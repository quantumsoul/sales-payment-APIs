const express = require("express");
const auth = require('../middleware/auth');
const Controller = require("./../controllers/Controller");
const auth = require('../middleware/auth')
const router = express.Router();
router.post("/login",Controller.Login);
router.post("/sales/transaction/enter",auth,Controller.salesTransactionEntry);
router.get("/get/sales/transaction",auth,Controller.getSalesTransaction);
router.post("/payment/transaction/enter",auth,Controller.paymentTransactionEntry);
router.get("/get/payment/transaction",auth,Controller.getPaymentTransaction);