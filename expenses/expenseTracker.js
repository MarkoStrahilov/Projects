const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
const h2 = document.querySelector('h2');
h2.style.textAlign = 'center';
const divExpenseContainer = document.createElement('div')
const btn = document.querySelector('#expense-btn')
const expenseContainer = document.querySelector('.my-expense-container')
const expenseName = document.querySelector('#name')
const expenseDate = document.querySelector('#date')
const expenseAmount = document.querySelector('#amount')

btn.addEventListener('click', function() {
    document.querySelector('.placeholder').style.display = 'none';
    expenseContainer.style.display = 'flex';
    expenseContainer.append(divExpenseContainer);
    divExpenseContainer.classList.add('style-expense-container')
    expenseNameValue(expenseName);
    expenseDateValue(expenseDate);
    expenseAmountValue(expenseAmount);
    const myExpenseButton = document.createElement('button')
    myExpenseButton.textContent = 'X';
    myExpenseButton.classList.add('style-expense-btn')
    divExpenseContainer.append(myExpenseButton)
    myExpenseButton.addEventListener('click', function() {
        divExpenseContainer.style.display = 'none';
    })
    document.querySelector('#name').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#amount').value = '';
})


function expenseNameValue(name) {
    const myExpenseName = document.createElement('p')
    myExpenseName.innerHTML = name.value;
    divExpenseContainer.append(myExpenseName)
}


function expenseDateValue(date) {
    const myExpenseDate = document.createElement('p')
    myExpenseDate.innerHTML = date.value;
    divExpenseContainer.append(myExpenseDate)
}


function expenseAmountValue(amount) {
    const myExpenseAmount = document.createElement('p')
    myExpenseAmount.innerHTML = amount.value;
    divExpenseContainer.append(myExpenseAmount)
}