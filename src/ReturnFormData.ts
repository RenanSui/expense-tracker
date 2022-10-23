// imports
import FormFormatter from './interfaces/FormFormatter.js';

// elements
const myForm = document.querySelector('#myForm') as HTMLFormElement;
const myFormTitle = myForm.querySelector('#myForm-title') as HTMLInputElement;
const myFormAmount = myForm.querySelector('#myForm-amount') as HTMLInputElement;
const myFormType = myForm.querySelector('#myForm-type') as HTMLInputElement;
const myFormDate = myForm.querySelector('#myForm-date') as HTMLInputElement;
const myFormNote = myForm.querySelector('#myForm-note') as HTMLInputElement;

// functions
const ReturnFormData = (): FormFormatter => {
	// form data
	const title: string = myFormTitle.value.toString();
	const amountNumber: number = parseInt(myFormAmount.value); // number
	const note: string = myFormNote.value;
	const type: string = myFormType.value;
	const date: string = myFormDate.value;

	return {
		title: title,
		amountNumber: amountNumber,
		note: note,
		type: type,
		date: date,
	};
};

export default ReturnFormData;