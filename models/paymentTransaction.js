const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const paymentTransactionSchema = new mongoose.Schema({
    DOC_TYPE:{
        type: String,
        required: true,
        trim: true
    },
    DOC_NO:{
        type: Number,
        required: true,
        trim: true
    },
    DOC_DT:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isDate(value)){
                throw new Error('Date format is wrong!')
            }
        },
        trim: true
    },
    Instrument_No:{
        type: Number,
        required: true,
        trim: true
    },
    Instrument_Dt:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isDate(value)){
                throw new Error('Date format is wrong!')
            }
        },
        trim: true
    },
    Narration:{
        type: String,
        required: true,
        trim: true
    },
    Allledgerentries_list:[
        {
            ledger_name:{
                type: String,
                required: true,
                trim: true
            },
            ledger_id:{
                type: Number,
                required: true,
                trim: true
            },
            debit_amount:{
                type: Number,
                required: true,
                trim: true
            },
            credit_amount:{
                type: Number,
                required: true,
                trim: true
            },
            'billallocation.list':[{
                reference_name:{
                    type: String,
                    required: true,
                    trim: true
                },
                debit_amount:{
                    type: Number,
                    required: true,
                    trim: true
                },
                credit_amount:{
                    type: Number,
                    required: true,
                    trim: true
                }
            }]
        },
        {
            ledger_name:{
                type: String,
                required: true,
                trim: true
            },
            ledger_id:{
                type: Number,
                required: true,
                trim: true
            },
            debit_amount:{
                type: Number,
                required: true,
                trim: true
            },
            credit_amount:{
                type: Number,
                required: true,
                trim: true
            }
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
})
const Paymenttransaction = mongoose.model("Paymenttransaction",paymentTransactionSchema);
module.exports = Paymenttransaction;