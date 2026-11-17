const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },

  amount: {
    type: Number,
    required: true,
    min: 0.01
  },

  category: {
    type: String,
    required: true,
    enum: [
      'Food',
      'Transportation',
      'School Supplies',
      'Entertainment',
      'Other'
    ]
  },

  date: {
    type: Date,
    required: true
  },

  description: {
    type: String,
    trim: true,
    maxlength: 500,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);