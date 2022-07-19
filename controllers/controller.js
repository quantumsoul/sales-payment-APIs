const Salestransaction = require('../models/salesTransaction')
const Paymenttransaction = require('../models/paymentTransaction')
const Purchasetransaction = require('../models/purchaseTransaction')
const Recipt = require('../models/recipt')
const User = require('../models/user')
const compare = require('../utils/dateCompare')
const jwt = require('jsonwebtoken')
exports.login = async(req,res)=>{
    console.log(req.headers.username)
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
        else if(req.query.grant_type == "Purchase"){
            const Transaction = new Purchasetransaction(req.body)
            await Transaction.save()
            res.status(201).json({
                Transaction
            })
        }
        else if(req.query.grant_type == "Recipt"){
            const Transaction = new Recipt(req.body)
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
            const transactions = await Salestransaction.find({emailId: req.headers.username})
            console.log(req.headers.username)
            var Transactions = []
            transactions.forEach(t=>{
                var b = req.headers.fromdate.split('-')
                var fromDate = b[2] + '-' + b[1] + '-' + b[0]
                var c = req.headers.todate.split('-')
                var toDate = c[2] + '-' + c[1] + '-' + c[0]
                var d = t.BILL_DT.split('-')
                var date = d[2]+'-'+d[1]+'-'+d[0]
                console.log(t.Vat5_Amt)
                if(date<=toDate && date>=fromDate){
                    Transactions.push(t)
                }
            })
            res.status(201).json({
                Transactions
            })
        }
        else if(req.query.grant_type == "Payment"){
            var transactions = await Paymenttransaction.find({emailId: req.query.email})
            var Transactions = []
            transactions.forEach(t=>{
                var b = req.headers.fromdate.split('-')
                var fromDate = b[2] + '-' + b[1] + '-' + b[0]
                var c = req.headers.todate.split('-')
                var toDate = c[2] + '-' + c[1] + '-' + c[0]
                var d = t.DOC_DT.split('-')
                var date = d[2]+'-'+d[1]+'-'+d[0]
                if(date<=toDate && date>=fromDate){
                    Transactions.push(t)
                }
            })
            res.status(201).json({
                Transactions
            })
        }
        else if(req.query.grant_type == "Purchase"){
            var transactions = await Purchasetransaction.find({emailId: req.query.email},{invoiceStatus:"Reviewed"})
            var Transactions = []
            transactions.forEach(t=>{
                var b = req.headers.fromdate.split('-')
                var fromDate = b[2] + '-' + b[1] + '-' + b[0]
                var c = req.headers.todate.split('-')
                var toDate = c[2] + '-' + c[1] + '-' + c[0]
                var d = t.DOCDATE.split('-')
                var date = d[2]+'-'+d[1]+'-'+d[0]
                if(date<=toDate && date>=fromDate){
                    Transactions.push(t)
                }
            })
            res.status(201).json({
                Transactions
            })
        } 
        else if(req.query.grant_type == "Recipt"){
            var transactions = await Recipt.find({emailId: req.query.email})
            var Transactions = []
            transactions.forEach(t=>{
                var b = req.headers.fromdate.split('-')
                var fromDate = b[2] + '-' + b[1] + '-' + b[0]
                var c = req.headers.todate.split('-')
                var toDate = c[2] + '-' + c[1] + '-' + c[0]
                var d = t.DOC_DT.split('-')
                var date = d[2]+'-'+d[1]+'-'+d[0]
                if(date<=toDate && date>=fromDate){
                    Transactions.push(t)
                }
            })
            res.status(201).json({
                Transactions
            })
        }
    } catch (error) {
        res.status(400).send()
    }
}