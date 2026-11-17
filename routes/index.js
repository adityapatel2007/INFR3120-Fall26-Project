var express = require('express');
var router = express.Router();

const Expense = require('../models/Expense');

// GET - Homepage
router.get('/', function(req, res) {
  res.render('index', {
    title: 'StudentWallet'
  });
});

// GET - Add Expense form
router.get('/expenses/new', function(req, res) {
  res.render('add-expense', {
    title: 'Add Expense'
  });
});

// GET - View all expenses
router.get('/expenses', async function(req, res, next) {
  try {
    const expenses = await Expense.find().sort({ date: -1 });

    res.render('expenses', {
      title: 'My Expenses',
      expenses: expenses
    });
  } catch (error) {
    next(error);
  }
});

// POST - Save new expense
router.post('/expenses', async function(req, res, next) {
  try {
    const { name, amount, category, date } = req.body;
    const description = req.body.description ?? '';

    const validCategories = [
      'Food',
      'Transportation',
      'School Supplies',
      'Entertainment',
      'Other'
    ];

    const amountNumber = Number(amount);
    const expenseDate = new Date(date);

    // Validate form data on the server
    if (
      typeof name !== 'string' ||
      !name.trim() ||
      name.trim().length > 100 ||
      typeof amount !== 'string' ||
      !/^\d+(\.\d{1,2})?$/.test(amount) ||
      !Number.isFinite(amountNumber) ||
      amountNumber <= 0 ||
      !validCategories.includes(category) ||
      typeof date !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(expenseDate.getTime()) ||
      typeof description !== 'string' ||
      description.length > 500
    ) {
      return res.status(400).send('Invalid expense information.');
    }

    // Create a new MongoDB expense record
    const newExpense = new Expense({
      name: name.trim(),
      amount: amountNumber,
      category: category,
      date: expenseDate,
      description: description.trim()
    });

    // Save expense to MongoDB
    await newExpense.save();

    // Redirect to dashboard
    res.redirect('/expenses');

  } catch (error) {
    next(error);
  }
});

// Test route
router.get('/test', function(req, res) {
  res.send('StudentWallet routes are working!');
});

module.exports = router;