const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const purchasesSchema = new mongoose.Schema({
    emailId:{
        type: String,
        req: true
    },
    clientId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    type: {
      type: String,
      default: 'Purchases',
    },
    PUR_TYPE:{
      type: String,
      trim: true
    },
    DOCUMENTNO:{
        type: String,
        trim: true
    },
    DOCDATE:{
        type: String,
        trim: true
    },
    CUSTOMER:{
        type: String,
        trim: true
    },
    GroupName:{
        type: String,
        trim: true
    },
    AddressLine1:{
        type: String,
        trim: true
    },
    AddressLine2:{
        type: String,
        trim: true
    },
    AddressLine3:{
        type: String,
        trim: true
    },
    StateName:{
        type: String,
        trim: true
    },
    PinCode:{
        type: Number,
        trim: true
    },
    PO_No:{
        type: String,
        trim: true
    },
    TRN_No:{
        type: String,
        trim: true
    },
    TotalInvoice_Amt:{
        type: Number,
        trim: true
    },
    Discount_Amt:{
        type: Number,
        trim: true
    },
    Freight_Amt:{
        type: Number,
        trim: true
    },
    OtherCharges_Amt:{
        type: Number,
        trim: true
    },
    TotalTax_Amt:{
        type: Number,
        trim: true
    },
    Vat5_Amt:{
        type: Number,
        trim: true
    },
    Vat0_Amt:{
        type: Number,
        trim: true
    },
    Tax_Exempt:{
        type: Boolean,
        default:false
    },
    Roundoff_amt:{
        type: Number,
        trim: true
    },
    isDrafted: {
      type: Boolean,
    },
    invoiceStatus: {
      type: String,
    },
    Itemlist:[{
      Item_name:{
          type: String,

          trim: true
      },
      CODE:{
          type: Number,

          trim: true
      },
      PARTNO:{
          type: String,

          trim: true
      },
      UOM:{
          type: String,

          trim: true
      },
      HSNNo:{
          type: Number,

          trim: true
      },
      TRNRate:{
          type: Number,

          trim: true
      },
      Batch_name:{
          type: String,
          trim: true
      },
      Qty:{
          type: Number,

          trim: true
      },
      Rate:{
          type: Number,

          trim: true
      },
      Amount:{
          type: Number,

          trim: true
      },
      Item_Allocation:{
          type: String,

          trim: true
      }
  }],
  attachFiles: {
    type: Array,
  },
  },
  {
    timestamps:true
  },
  {
    versionKey: false,
  })
const Purchases = mongoose.model('Purchases', purchasesSchema)
module.exports = Purchases