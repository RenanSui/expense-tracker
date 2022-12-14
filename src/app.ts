// imports
import Transaction from './classes/Transaction.js';
import getFormData from './getFormData.js';
import FormFormatter from './interfaces/FormFormatter.js';
import { RESET_Form, RESET_Details, RESET_EditForm } from './ResetForm.js';
import RENDER_History from './renderHistory.js';
import RENDER_Totals from './renderTotals.js';
import { RENDER_Details } from './renderDetails.js';
import {
	SHOW_HIDE_Form,
	SHOW_HIDE_Details,
	SHOW_HIDE_Edit,
} from './Show_Hide_Functions.js';
import {
	AddNewId_LocalStorage,
	getClickedElementId,
} from './AddNewTransaction.js';
import { getId_LocalStorage } from './getLocalStorage.js';
import { renderFormValues } from './renderFormValues.js';
import { DeleteForms } from './DeleteForm.js';
import { renderFilteredHistory } from './renderFilteredHistory.js';

// form elements
const myForm = document.querySelector('#myForm') as HTMLFormElement;
const showFormBtn = document.querySelector('#showFormBtn') as HTMLButtonElement;
const hideFormBtn = document.querySelector('#hideFormBtn') as HTMLButtonElement;
const myFormDate = document.querySelector('#myForm-date') as HTMLButtonElement;

// details elements
const historyContainer = document.querySelector('#history') as HTMLDivElement;
const hideDetailsBtn = document.querySelector(
	'#hideDetailsBtn'
) as HTMLButtonElement;

// edit elements
const myFormEdit = document.querySelector('#myForm-Edit') as HTMLFormElement;
const showEditBtn = document.querySelector('#showEditBtn') as HTMLButtonElement;
const hideEditFormBtn = document.querySelector(
	'#hideEditFormBtn'
) as HTMLButtonElement;

// delete elements
const deleteBtn = document.querySelector('#deleteBtn');

// info containers
const totalBalance = document.querySelector('#totalBalance') as HTMLDivElement;
const totalIncome = document.querySelector('#totalIncome') as HTMLDivElement;
const totalExpense = document.querySelector('#totalExpense') as HTMLDivElement;

// header and dropdown menu
const dropdownMenu = document.querySelector('.nav-dropdown') as HTMLDivElement;
const headerTitle = document.querySelector(
	'.header-title'
) as HTMLHeadingElement;
const dropdownOverall = document.querySelector(
	'.dropdown-overall'
) as HTMLHeadingElement;
const dropdownIncome = document.querySelector(
	'.dropdown-income'
) as HTMLHeadingElement;
const dropdownExpense = document.querySelector(
	'.dropdown-expense'
) as HTMLHeadingElement;

// Call render
RENDER_History();
RENDER_Totals();
/*
 *
 *
 *
 */
// event on submit form and preventdefault
myForm.addEventListener('submit', (e): void => {
	e.preventDefault();

	let currentId = 0;

	// get and destructure data
	const {
		title,
		amountNumber,
		note,
		type,
		date,
		id,
		tag,
		createdAt,
	}: FormFormatter = getFormData('form', currentId);

	// create new transaction
	const NEW_Transaction = new Transaction(
		title,
		amountNumber,
		note,
		type,
		date,
		id,
		tag,
		createdAt
	);

	// add new transaction
	NEW_Transaction.printFormat();
	NEW_Transaction.NewTransaction();

	// Reset form
	RESET_Form();

	// render the list history
	RENDER_History();

	// render totals
	RENDER_Totals();

	// Remove form
	SHOW_HIDE_Form('hide');
});

// event on submit form edit
myFormEdit.addEventListener('submit', (e: MouseEvent): void => {
	e.preventDefault();

	const currentId = parseInt(getId_LocalStorage());

	// get and destructure data
	let {
		title,
		amountNumber,
		note,
		type,
		date,
		id,
		tag,
		createdAt,
	}: FormFormatter = getFormData('editForm', currentId);

	// create new transaction
	const NEW_Transaction = new Transaction(
		title,
		amountNumber,
		note,
		type,
		date,
		id,
		tag,
		createdAt
	);

	// add new transaction
	NEW_Transaction.printFormat();
	NEW_Transaction.EditTransaction();

	// render the list history
	RENDER_History();

	// render totals
	RENDER_Totals();

	// value '0' to currentId local storage
	AddNewId_LocalStorage('0');

	// hide edit form
	SHOW_HIDE_Edit('hide');
});

// delete button individually
deleteBtn.addEventListener('click', (e) => {
	const currentId = parseInt(getId_LocalStorage());
	console.log('Delete id: ' + currentId);
	DeleteForms(currentId);

	// render the list history
	RENDER_History();

	// render totals
	RENDER_Totals();

	// value '0' to currentId local storage
	AddNewId_LocalStorage('0');

	// hide details
	SHOW_HIDE_Details('hide');
});
/*
 *
 *
 *
 */
// SHOW and HIDE editForm
showEditBtn.addEventListener('click', (): void => {
	const currentId = parseInt(getId_LocalStorage());
	renderFormValues(currentId);
	SHOW_HIDE_Details('hide');
	SHOW_HIDE_Edit('show');
});
hideEditFormBtn.addEventListener('click', (): void => {
	RESET_EditForm();
	SHOW_HIDE_Edit('hide');
});

// SHOW and HIDE details Form
historyContainer.addEventListener('click', (e): void => {
	// get id for DETAILS page
	const id = getClickedElementId(e);
	console.log(id);
	RENDER_Details(parseInt(id));

	// set the value id to currentId local storage / state management
	AddNewId_LocalStorage(id);

	// show details
	SHOW_HIDE_Details('show');
});
hideDetailsBtn.addEventListener('click', (): void => {
	// value '0' to currentId local storage
	AddNewId_LocalStorage('0');

	// hide details
	SHOW_HIDE_Details('hide');
});

// SHOW, HIDE and RESET Form
showFormBtn.addEventListener('click', (): void => {
	SHOW_HIDE_Form('show');
});
hideFormBtn.addEventListener('click', (): void => {
	SHOW_HIDE_Form('hide');
});
/*
 *
 *
 *
 */
// balance, income and expense filter
totalBalance.addEventListener('click', () => {
	renderFilteredHistory('Balance');
	headerTitle.innerHTML = `Overall
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
});
totalIncome.addEventListener('click', () => {
	renderFilteredHistory('Income');
	headerTitle.innerHTML = `Income
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
});
totalExpense.addEventListener('click', () => {
	renderFilteredHistory('Expense');
	headerTitle.innerHTML = `Expenses
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
});
/*
 *
 *
 *
 */

// dropdown menu
headerTitle.addEventListener('click', () => {
	dropdownMenu.classList.toggle('nav-dropdown-show');
});

dropdownOverall.addEventListener('click', () => {
	console.log('overall');
	dropdownMenu.classList.remove('nav-dropdown-show');
	headerTitle.innerHTML = `Overall
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
	renderFilteredHistory('Balance');
});

dropdownIncome.addEventListener('click', () => {
	console.log('income');
	dropdownMenu.classList.remove('nav-dropdown-show');
	headerTitle.innerHTML = `Income
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
	renderFilteredHistory('Income');
});

dropdownExpense.addEventListener('click', () => {
	console.log('expense');
	dropdownMenu.classList.remove('nav-dropdown-show');
	headerTitle.innerHTML = `Expenses
	<span>
		<div class="chevron-down mr-auto ml-1"></div>
	</span>`;
	renderFilteredHistory('Expense');
});

// dark and white theme
// drop down menu on the header title: all income or all expense or total balance

// myFormDate.addEventListener('mouseenter', () => {
// 	myFormDate.type = 'date'
// })
