var express = require('express');
var router = express.Router();

// Temporary storage for expenses
var expenses = [];

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'StudentWallet'
  });
});

// GET Add Expense page
router.get('/expenses/new', function(req, res, next) {
  res.render('add-expense', {
    title: 'Add Expense'
  });
});
// GET View Expenses page
// GET View Expenses page
router.get('/expenses', function(req, res) {
  res.render('expenses', {
    title: 'My Expenses',
    expenses: expenses
  });
});



// POST - Save a new expense
router.post('/expenses', function(req, res) {
  var newExpense = {
    name: req.body.name,
    amount: Number(req.body.amount),
    category: req.body.category,
    date: req.body.date,
    description: req.body.description
  };

  expenses.push(newExpense);

  res.redirect('/expenses');
});

// Test route
router.get('/test', function(req, res) {
  res.send('StudentWallet routes are working!');
});
module.exports = router;