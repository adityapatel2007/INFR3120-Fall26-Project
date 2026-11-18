document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('expenseForm');
  const errorMessage = document.getElementById('formError');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    errorMessage.textContent = '';

    const name = document.getElementById('name').value.trim();
    const amount = Number(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    if (!name || name.length > 100) {
      event.preventDefault();
      errorMessage.textContent = 'Please enter a valid expense name.';
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      event.preventDefault();
      errorMessage.textContent = 'Please enter a valid amount.';
      return;
    }

    if (!category || !date) {
      event.preventDefault();
      errorMessage.textContent = 'Please select a category and date.';
      return;
    }

    if (description.length > 500) {
      event.preventDefault();
      errorMessage.textContent = 'Description must be 500 characters or less.';
      return;
    }

  });
});