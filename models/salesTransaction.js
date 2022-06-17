const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
function formatDate (v) {
    var d = v.split('-')
    var r = d[2] + '-' + d[1] + '-' + d[0]
    return r
}
const salesTransactionSchema = new mongoose.Schema({
    SAL_TYPE:{
        type: String,
        required: true,
        trim: true
    },
    FULL_INVO:{
        type: String,
        required: true,
        trim: true
    },
    BILL_DT:{
        set: formatDate,
        type: Date,
        required: true,
        trim: true
    },
    CUSTOMER:{
        type: String,
        required: true,
        trim: true
    },
    CUSTOMERCode:{
        type: Number,
        required: true,
        trim: true
    },
    GroupName:{
        type: String,
        required: true,
        trim: true
    },
    AddressLine1:{
        type: String,
        required: true,
        trim: true
    },
    AddressLine2:{
        type: String,
        required: true,
        trim: true
    },
    AddressLine3:{
        type: String,
        required: true,
        trim: true
    },
    StateName:{
        type: String,
        required: true,
        trim: true
    },
    PinCode:{
        type: Number,
        required: true,
        trim: true
    },
    GSTNo:{
        type: String,
        required: true,
        trim: true
    },
    PO_No:{
        type: String,
        required: true,
        trim: true
    },
    TotalInvoice_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Discount_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Freight_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    OtherCharges_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    TotalTax_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Vat5_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Vat0_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Tax_Exempt:{
        type: Boolean,
        required: true
    },
    Roundoff_amt:{
        type: Number,
        required: true,
        trim: true
    },
    Itemlist:[{
        Item_name:{
            type: String,
            required: true,
            trim: true
        },
        CODE:{
            type: Number,
            required: true,
            trim: true
        },
        PARTNO:{
            type: String,
            required: true,
            trim: true
        },
        UOM:{
            type: String,
            required: true,
            trim: true
        },
        HSNNo:{
            type: Number,
            required: true,
            trim: true
        },
        GSTRate:{
            type: Number,
            required: true,
            trim: true
        },
        Batch_name:{
            type: String,
            trim: true
        },
        QTY:{
            type: Number,
            required: true,
            trim: true
        },
        Rate:{
            type: Number,
            required: true,
            trim: true
        },
        Amount:{
            type: Number,
            required: true,
            trim: true
        },
        Item_Allocation:{
            type: String,
            required: true,
            trim: true
        }
    }]
},{versionKey:false})
const Salestransaction = mongoose.model("Salestransaction",salesTransactionSchema);
module.exports = Salestransaction;
