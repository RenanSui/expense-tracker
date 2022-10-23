import calculateTotals from './calculateTotals.js';
const tbValue = document.querySelector('#tB-value');
const incomeValue = document.querySelector('#income-value');
const expenseValue = document.querySelector('#expense-value');
const RENDER_Totals = () => {
    const { balance, income, expense } = calculateTotals();
    let newBalance;
    let newIncome = `+$${income.toLocaleString()}`;
    let newExpense = `-$${expense.toLocaleString()}`;
    if (balance < 0)
        newBalance = `-$${(-(balance)).toLocaleString()}`;
    if (balance >= 0)
        newBalance = `$${balance.toLocaleString()}`;
    tbValue.innerText = newBalance;
    incomeValue.innerText = newIncome;
    expenseValue.innerText = newExpense;
};
export default RENDER_Totals;
