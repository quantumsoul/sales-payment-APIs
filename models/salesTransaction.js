const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
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
        type: String,
        required: true,
        trim: true
    },
    CUSTOMER:{
        type: String,
        required: true,
        trim: true
    },
    CUSTOMERcode:{
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
    Frieght_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    OtherCharges_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    TotalGST_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Igst28_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Igst18_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Igst12_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Igst5_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Cgst14_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Sgst14_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Cgst9_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Sgst9_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Cgst6_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Sgst6_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Cgst2_5_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    Sgst2_5_Amt:{
        type: Number,
        required: true,
        trim: true
    },
    TCS_Amt:{
        type: Number,
        required: true,
        trim: true
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
})
const Salestransaction = mongoose.model("Salestransaction",salesTransactionSchema);
module.exports = Salestransaction;