// imports
import { getValuesById } from './getLocalStorage.js';
import FormFormatter from './interfaces/FormFormatter.js';

// elements
const myForm = document.querySelector('#myForm-Edit') as HTMLFormElement;
const myFormTitle = myForm.querySelector('#myForm-title') as HTMLInputElement;
const myFormAmount = myForm.querySelector('#myForm-amount') as HTMLInputElement;
const myFormType = myForm.querySelector('#myForm-type') as HTMLInputElement;
const myFormTag = myForm.querySelector('#myForm-tag') as HTMLInputElement;
const myFormDate = myForm.querySelector('#myForm-date') as HTMLInputElement;
const myFormNote = myForm.querySelector('#myForm-note') as HTMLInputElement;

// functions
const ReturnEditFormData = (currentId: number): FormFormatter => {
	// form data
	const title: string = myFormTitle.value.toString();
	const amountNumber: number = parseInt(myFormAmount.value); // number
	const note: string = myFormNote.value;
	const type: string = myFormType.value;
	const date: string = myFormDate.value;
	const id: number = currentId;
	const tag: string = myFormTag.value;
	const createdAt: any = getValuesById(id)[0].createdAt;

	return {
		title: title,
		amountNumber: amountNumber,
		note: note,
		type: type,
		date: date,
		id: id,
		tag: tag,
		createdAt: createdAt,
	};
};

export default ReturnEditFormData;
