import getLocalStorage, { getTotals } from './getLocalStorage.js';
const calculateTotals = () => {
    let incomeVar = 0;
    let expenseVar = 0;
    let counter = 0;
    let history = getLocalStorage();
    let totals = getTotals();
    console.log(`totals: ${JSON.stringify(totals)}`);
    history.map(() => {
        const { amountNumber } = history[counter];
        console.log(`amount${counter}: ${amountNumber}`);
        if (history[counter].type === 'Expense')
            expenseVar += amountNumber;
        if (history[counter].type === 'Income')
            incomeVar += amountNumber;
        counter++;
    });
    totals.income = incomeVar;
    totals.expense = expenseVar;
    totals.balance = incomeVar - expenseVar;
    const { balance, income, expense } = totals;
    let totalsCalculated = totals;
    localStorage.setItem('totals', JSON.stringify(totalsCalculated));
    console.log(`total calculated: ${JSON.stringify(totalsCalculated)}`);
    return { balance, income, expense };
};
export default calculateTotals;
