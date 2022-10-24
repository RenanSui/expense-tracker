import { formatFullDate } from './formatDate.js';
const myForm = document.querySelector('#myForm');
const myFormTitle = myForm.querySelector('#myForm-title');
const myFormAmount = myForm.querySelector('#myForm-amount');
const myFormType = myForm.querySelector('#myForm-type');
const myFormTag = myForm.querySelector('#myForm-tag');
const myFormDate = myForm.querySelector('#myForm-date');
const myFormNote = myForm.querySelector('#myForm-note');
const ReturnFormData = () => {
    const title = myFormTitle.value.toString();
    const amountNumber = parseInt(myFormAmount.value);
    const note = myFormNote.value;
    const type = myFormType.value;
    const date = myFormDate.value;
    const tag = myFormTag.value;
    const createdAt = formatFullDate();
    return {
        title: title,
        amountNumber: amountNumber,
        note: note,
        type: type,
        date: date,
        id: createRandomId(),
        tag: tag,
        createdAt: createdAt,
    };
};
const createRandomId = () => {
    const id = Date.now();
    return id;
};
export default ReturnFormData;
