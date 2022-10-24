import Transaction from './classes/Transaction.js';
import getFormData from './getFormData.js';
import { RESET_Form } from './ResetForm.js';
import RENDER_History from './renderHistory.js';
import RENDER_Totals from './renderTotals.js';
import { SHOW_HIDE_Form, SHOW_HIDE_Details } from './Show_Hide_Functions.js';
const myForm = document.querySelector('#myForm');
const showFormBtn = document.querySelector('#showFormBtn');
const hideFormBtn = document.querySelector('#hideFormBtn');
const historyContainer = document.querySelector('#history');
const detailsContainer = document.querySelector('#details');
const hideDetailsBtn = document.querySelector('#hideDetailsBtn');
RENDER_History();
RENDER_Totals();
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { title, amountNumber, note, type, date, id, tag } = getFormData('form');
    const NEW_Transaction = new Transaction(title, amountNumber, note, type, date, id, tag);
    NEW_Transaction.printFormat();
    NEW_Transaction.NewTransaction();
    RESET_Form();
    RENDER_History();
    RENDER_Totals();
    SHOW_HIDE_Form('hide');
});
historyContainer.addEventListener('click', (e) => {
    const eventTarget = e.target;
    const parentElement1 = eventTarget;
    console.log(parentElement1.id);
    SHOW_HIDE_Details('show');
});
hideDetailsBtn.addEventListener('click', () => {
    SHOW_HIDE_Details('hide');
});
showFormBtn.addEventListener('click', () => {
    SHOW_HIDE_Form('show');
});
hideFormBtn.addEventListener('click', () => {
    SHOW_HIDE_Form('hide');
});
