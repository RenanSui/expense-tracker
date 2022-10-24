const myForm = document.querySelector('#myForm');
const myFormTitle = myForm.querySelector('#myForm-title');
const myFormAmount = myForm.querySelector('#myForm-amount');
const myFormType = myForm.querySelector('#myForm-type');
const myFormTag = myForm.querySelector('#myForm-type');
const myFormDate = myForm.querySelector('#myForm-date');
const myFormNote = myForm.querySelector('#myForm-note');
const myFormEdit = document.querySelector('#myForm');
const myFormEditTitle = myFormEdit.querySelector('#myForm-title');
const myFormEditAmount = myFormEdit.querySelector('#myForm-amount');
const myFormEditType = myFormEdit.querySelector('#myForm-type');
const myFormEditTag = myForm.querySelector('#myForm-type');
const myFormEditDate = myFormEdit.querySelector('#myForm-date');
const myFormEditNote = myFormEdit.querySelector('#myForm-note');
export const RESET_Form = () => {
    myFormTitle.value = '';
    myFormAmount.value = '';
    myFormNote.value = '';
    myFormType.value = '';
    myFormTag.value = '';
    myFormDate.value = '';
};
export const RESET_Details = () => {
    console.log('oi');
};
export const RESET_EditForm = () => {
    myFormEditTitle.value = '';
    myFormEditAmount.value = '';
    myFormEditNote.value = '';
    myFormEditType.value = '';
    myFormEditTag.value = '';
    myFormEditDate.value = '';
};
