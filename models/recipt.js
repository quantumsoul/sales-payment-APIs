const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const reciptSchema = new mongoose.Schema({
    emailId:{
        type: String,
        req: true
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    type: {
        type: String,
        default: 'Recipt',
    },
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
        trim: true
    },
    Narration:{
        type: String,
        required: true,
        trim: true
    },
    isDrafted: {
        type: Boolean,
    },
    invoiceStatus: {
        type: String,
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
            billallocation_list:[{
                reference_name:{
                    type: String,
                    trim: true
                },
                debit_amount:{
                    type: Number,
                    trim: true
                },
                credit_amount:{
                    type: Number,
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
},{versionKey:false})
const Recipt = mongoose.model("Recipt",reciptSchema);
module.exports = Recipt;
