const Salestransaction = require('../models/salesTransaction')
const Paymenttransaction = require('../models/paymentTransaction')
const jwt = require('jsonwebtoken')
exports.Login = async (req,res)=>{
    try {
        const token = jwt.sign({username:req.body.username, password:req.body.password},process.env.JWT_SECRET);
        const obj = {
            access_token: token,
            token_type:"bearer",
            message:"token generated successfully"
        }
        res.send(JSON.stringify(obj));
    } catch (error) {
        res.status(400).send();
    }
}
exports.salesTransactionEntry = async(req,res)=>{
    const salesTransaction = new Salestransaction(req.body)
    try {
        await salesTransaction.save()
        res.status(201).json({
            transaction:{
                salesTransaction
            }
        })
    } catch (error) {
        res.status(400).send()
    }
}
exports.paymentTransactionEntry = async(req,res)=>{
    const paymentTransaction = new Paymenttransaction(req.body)
    try {
        await paymentTransaction.save()
        res.status(201).json({
            transaction:{
                paymentTransaction
            }
        })
    } catch (error) {
        res.status(400).send()
    }
}