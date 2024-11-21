const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required:true,
//     ref: "Transaction"
// },
  amount: { 
    type: Number, 
    required: true 
  },
  transaction_type: {
    type: String, 
    enum: ['DEPOSIT', 'WITHDRAWAL'], 
    required: true 
  },
  user: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['PENDING', 'COMPLETED', 'FAILED'], 
    default: 'PENDING' 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
})

module.exports = mongoose.model('Transaction', transactionSchema)