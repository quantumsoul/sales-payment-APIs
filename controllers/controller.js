const Salestransaction = require('../models/salesTransaction')
const Paymenttransaction = require('../models/paymentTransaction')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
exports.login = async(req,res)=>{
    const prevuser = await User.findOne({username:req.headers.username,password:req.headers.password})
    if(prevuser!=undefined){
        const token = await prevuser.generateAuthToken()
        res.status(200).send({
            "access_token":`${token}`, 
            "token_type":"bearer", 
            "message":"token generated successfully",
        })
    } else {
        const user = new User({username:req.headers.username,password:req.headers.password})
        try {
            await user.save()
            const token = await user.generateAuthToken()
            res.status(200).send(
                { 
                    "access_token":`${token}`, 
                    "token_type":"bearer", 
                    "message":"token generated successfully", 
                }
            )
        } catch (error) {
            res.status(400)
        }
    }
}
exports.loginInfo = async(req,res)=>{
    try {
        res.send(req.user)
    } catch (error) {
        res.status(400)
    }
}
exports.postapi = async(req,res)=>{
    try {
        if(req.query.grant_type == "Sales"){
            const Transaction = new Salestransaction(req.body)
            await Transaction.save()
            res.status(201).json({
                Transaction
            })
        }
        else if(req.query.grant_type == "Payment"){
            const Transaction = new Paymenttransaction(req.body)
            await Transaction.save()
            res.status(201).json({
                Transaction
            })
        }
    } catch (error) {
        res.status(400).send()
    }
}
exports.getapi = async(req,res)=>{
    try {
        if(req.query.grant_type == "Sales"){
            var b = req.headers.fromdate.split('-')
            var fromDate = b[2] + '-' + b[1] + '-' + b[0]
            var c = req.headers.todate.split('-')
            var toDate = c[2] + '-' + c[1] + '-' + c[0]
            const Transactions = await Salestransaction.find({
                BILL_DT: {
                    $gte: new Date(new Date(fromDate).setHours(00, 00, 00)),
                    $lt: new Date(new Date(toDate).setHours(23, 59, 59))
                }
            }).sort({ BILL_DT: 'asc'})
            
            res.status(201).json({
                Transactions
            })
        }
        else if(req.query.grant_type == "Payment"){
            var b = req.headers.fromdate.split('-')
            var fromDate = b[2] + '-' + b[1] + '-' + b[0]
            var c = req.headers.todate.split('-')
            var toDate = c[2] + '-' + c[1] + '-' + c[0]
            const Transactions = await Paymenttransaction.find({
                DOC_DT: {
                    $gte: new Date(new Date(fromDate).setHours(00, 00, 00)),
                    $lt: new Date(new Date(toDate).setHours(23, 59, 59))
                }
            }).sort({ DOC_DT: 'asc'})
            res.status(201).json({
                Transactions
            })
        }
    } catch (error) {
        res.status(400).send()
    }
}