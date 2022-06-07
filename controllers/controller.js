const User = require('../models/usermodel')
const Salestransaction = require('../models/salesTransaction')
const Paymenttransaction = require('../models/paymentTransaction')
exports.Login = async (req,res)=>{
    try {
        var user;
        const user = await User.findByCredentials(req.body.username, req.body.password)
        const token = await user.generateAuthToken();
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
    const salesTransaction = new Salestransaction({
        ...req.body,
        owner:req.user._id
    })
    try {
        await salesTransaction.save()
        res.status(201)
    } catch (error) {
        res.status(400)
    }
}
exports.getSalesTransaction = async(req,res)=>{
    try {
        const salesTransaction = await Salestransaction.findOne({owner:req.user._id})
        res.status(200).json({
            transaction:{
                salesTransaction
            }
        })
    } catch (error) {
        res.status(400)
    }
}
exports.paymentTransactionEntry = async(req,res)=>{
    const paymentTransaction = new Paymenttransaction({
        ...req.body,
        owner:req.user._id
    })
    try {
        await paymentTransaction.save()
        res.status(201)
    } catch (error) {
        res.status(400)
    }
}
exports.getPaymentTransaction = async(req,res)=>{
    try {
        const paymentTransaction = await Paymenttransaction.findOne({owner:req.user._id})
        res.status(200).json({
            transaction:{
                paymentTransaction
            }
        })
    } catch (error) {
        res.status(400)
    }
}