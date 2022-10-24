import { RESET_Form } from './ResetForm.js';
const myForm = document.querySelector('#myForm');
const detailsContainer = document.querySelector('#details');
export const SHOW_HIDE_Form = (action) => {
    const form = myForm.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
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
};
