const myForm = document.querySelector('#myForm');
const myFormTitle = myForm.querySelector('#myForm-title');
const myFormAmount = myForm.querySelector('#myForm-amount');
const myFormType = myForm.querySelector('#myForm-type');
const myFormTag = myForm.querySelector('#myForm-tag');
const myFormDate = myForm.querySelector('#myForm-date');
const myFormNote = myForm.querySelector('#myForm-note');
const ReturnEditFormData = () => {
    const title = myFormTitle.value.toString();
    const amountNumber = parseInt(myFormAmount.value);
    const note = myFormNote.value;
    const type = myFormType.value;
    const date = myFormDate.value;
    const tag = myFormTag.value;
    return {
        title: title,
        amountNumber: amountNumber,
        note: note,
        type: type,
        date: date,
        tag: tag,
    };
};
export default ReturnEditFormData;
