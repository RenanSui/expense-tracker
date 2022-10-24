import Transaction from './classes/Transaction.js';
import getFormData from './getFormData.js';
import { RESET_Form, RESET_EditForm } from './ResetForm.js';
import RENDER_History from './renderHistory.js';
import RENDER_Totals from './renderTotals.js';
import { RENDER_Details } from './renderDetails.js';
import { SHOW_HIDE_Form, SHOW_HIDE_Details, SHOW_HIDE_Edit, } from './Show_Hide_Functions.js';
import { AddNewId_LocalStorage, getClickedElementId, } from './AddNewTransaction.js';
import { getId_LocalStorage } from './getLocalStorage.js';
import { renderFormValues } from './renderFormValues.js';
const myForm = document.querySelector('#myForm');
const showFormBtn = document.querySelector('#showFormBtn');
const hideFormBtn = document.querySelector('#hideFormBtn');
const historyContainer = document.querySelector('#history');
const hideDetailsBtn = document.querySelector('#hideDetailsBtn');
const myFormEdit = document.querySelector('#myForm-Edit');
const showEditBtn = document.querySelector('#showEditBtn');
const hideEditFormBtn = document.querySelector('#hideEditFormBtn');
RENDER_History();
RENDER_Totals();
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let currentId = 0;
    const { title, amountNumber, note, type, date, id, tag, createdAt, } = getFormData('form', currentId);
    const NEW_Transaction = new Transaction(title, amountNumber, note, type, date, id, tag, createdAt);
    NEW_Transaction.printFormat();
    NEW_Transaction.NewTransaction();
    RESET_Form();
    RENDER_History();
    RENDER_Totals();
    SHOW_HIDE_Form('hide');
});
myFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentId = parseInt(getId_LocalStorage());
    let { title, amountNumber, note, type, date, id, tag, createdAt, } = getFormData('editForm', currentId);
    const NEW_Transaction = new Transaction(title, amountNumber, note, type, date, id, tag, createdAt);
    NEW_Transaction.printFormat();
    NEW_Transaction.EditTransaction();
    RENDER_History();
    RENDER_Totals();
    SHOW_HIDE_Edit('hide');
});
showEditBtn.addEventListener('click', () => {
    const currentId = parseInt(getId_LocalStorage());
    renderFormValues(currentId);
    SHOW_HIDE_Details('hide');
    SHOW_HIDE_Edit('show');
});
hideEditFormBtn.addEventListener('click', () => {
    RESET_EditForm();
    SHOW_HIDE_Edit('hide');
});
historyContainer.addEventListener('click', (e) => {
    const id = getClickedElementId(e);
    console.log(id);
    RENDER_Details(parseInt(id));
    AddNewId_LocalStorage(id);
    SHOW_HIDE_Details('show');
});
hideDetailsBtn.addEventListener('click', () => {
    AddNewId_LocalStorage('0');
    SHOW_HIDE_Details('hide');
});
showFormBtn.addEventListener('click', () => {
    SHOW_HIDE_Form('show');
});
hideFormBtn.addEventListener('click', () => {
    SHOW_HIDE_Form('hide');
});
