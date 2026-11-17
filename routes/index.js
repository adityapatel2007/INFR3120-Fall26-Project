var express = require('express');
var router = express.Router();

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
router.get('/expenses', function(req, res, next) {
  res.render('expenses', {
    title: 'My Expenses'
  });
});
module.exports = router;