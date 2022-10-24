import { RESET_Form } from './ResetForm.js';
const myForm = document.querySelector('#myForm');
const detailsContainer = document.querySelector('#details');
const myFormEdit = document.querySelector('#myForm-Edit');
const modal = document.querySelector('#modal');
export const SHOW_HIDE_Form = (action) => {
    const form = myForm.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
    }
};
export const SHOW_HIDE_Details = (action) => {
    const form = detailsContainer.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
    }
};
export const SHOW_HIDE_Edit = (action) => {
    const form = myFormEdit.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
    }
};
