import { getValuesById } from './getLocalStorage.js';
const myForm = document.querySelector('#myForm-Edit');
const myFormTitle = myForm.querySelector('#myForm-title');
const myFormAmount = myForm.querySelector('#myForm-amount');
const myFormType = myForm.querySelector('#myForm-type');
const myFormTag = myForm.querySelector('#myForm-tag');
const myFormDate = myForm.querySelector('#myForm-date');
const myFormNote = myForm.querySelector('#myForm-note');
const ReturnEditFormData = (currentId) => {
    const title = myFormTitle.value.toString();
    const amountNumber = parseInt(myFormAmount.value);
    const note = myFormNote.value;
    const type = myFormType.value;
    const date = myFormDate.value;
    const id = currentId;
    const tag = myFormTag.value;
    const createdAt = getValuesById(id)[0].createdAt;
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
