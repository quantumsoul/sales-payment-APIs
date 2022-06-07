const Salestransaction = require('../models/salesTransaction')
const Paymenttransaction = require('../models/paymentTransaction')
exports.api = async(req,res)=>{
    try {
        if(req.query.grant_type == "Sales"){
            const salesTransaction = new Salestransaction(req.body)
            await salesTransaction.save()
            res.status(201).json({
                transaction:{
                    salesTransaction
                }
            })
        }
        else if(req.query.grant_type == "Payment"){
            const paymentTransaction = new Paymenttransaction(req.body)
            await paymentTransaction.save()
            res.status(201).json({
                transaction:{
                    paymentTransaction
                }
            })
        }
    } catch (error) {
        res.status(400).send()
    }
}