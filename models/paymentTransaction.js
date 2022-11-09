const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const paymentTransactionSchema = new mongoose.Schema(
  {
    emailId: {
      type: String,
      req: true,
    },
    clientId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    type: {
      type: String,
      default: "Payment",
    },
    DOC_TYPE: {
      type: String,

      trim: true,
    },
    DOC_NO: {
      type: Number,

      trim: true,
    },
    DOC_DT: {
      type: String,

      trim: true,
    },
    Instrument_No: {
      type: Number,

      trim: true,
    },
    Instrument_Dt: {
      type: String,

      trim: true,
    },
    Narration: {
      type: String,

      trim: true,
    },
    isDrafted: {
      type: Boolean,
    },
    invoiceStatus: {
      type: String,
    },
    Allledgerentries_list: [
      {
        ledger_name: {
          type: String,

          trim: true,
        },
        ledger_id: {
          type: Number,

          trim: true,
        },
        debit_amount: {
          type: Number,

          trim: true,
        },
        ledger_group: {
          type: String,

          trim: true,
        },
        credit_amount: {
          type: Number,

          trim: true,
        },
        billallocation_list: [
          {
            reference_name: {
              type: String,

              trim: true,
            },
            debit_amount: {
              type: Number,

              trim: true,
            },
            credit_amount: {
              type: Number,

              trim: true,
            },
          },
        ],
      },
      {
        ledger_name: {
          type: String,

          trim: true,
        },
        ledger_id: {
          type: Number,

          trim: true,
        },
        debit_amount: {
          type: Number,

          trim: true,
        },
        credit_amount: {
          type: Number,

          trim: true,
        },
      },
    ],
  },
  { versionKey: false }
);
const Payment = mongoose.model("Payment", paymentTransactionSchema);
module.exports = Payment;
