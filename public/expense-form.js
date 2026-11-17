
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('expenseForm');
  const amountInput = document.getElementById('amount');
  const nameInput = document.getElementById('name');
  const errorMessage = document.getElementById('formError');

  form.addEventListener('submit', function (event) {

    errorMessage.textContent = '';

    const expenseName = nameInput.value.trim();
    const amount = Number(amountInput.value);

    if (expenseName === '') {
      event.preventDefault();
      errorMessage.textContent = 'Please enter an expense name.';
      nameInput.focus();
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      event.preventDefault();
      errorMessage.textContent = 'Please enter a valid amount greater than $0.';
      amountInput.focus();
      return;
    }

    if (Math.round(amount * 100) !== amount * 100) {
      event.preventDefault();
      errorMessage.textContent = 'Amount cannot have more than two decimal places.';
      amountInput.focus();
      return;
    }

    // If validation passes, the browser submits the form.

  });

});
