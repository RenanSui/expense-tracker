import { RESET_Form } from './ResetForm.js';
const myForm = document.querySelector('#myForm');
const detailsContainer = document.querySelector('#details');
const myFormEdit = document.querySelector('#myForm-Edit');
const modal = document.querySelector('#modal');
const bodyElement = document.querySelector('#body');
export const SHOW_HIDE_Form = (action) => {
    const form = myForm.classList;
    const body = bodyElement.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
        body.add('overflow-hidden');
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
        body.remove('overflow-hidden');
    }
};
export const SHOW_HIDE_Details = (action) => {
    const form = detailsContainer.classList;
    const body = bodyElement.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
        body.add('overflow-hidden');
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
        body.remove('overflow-hidden');
    }
};
export const SHOW_HIDE_Edit = (action) => {
    const form = myFormEdit.classList;
    const body = bodyElement.classList;
    if (!form.contains('hide') || !form.contains('show'))
        form.add('show');
    modal.classList.toggle('modal');
    if (action === 'show') {
        form.remove('hide');
        form.add('show');
        RESET_Form();
        body.add('overflow-hidden');
    }
    else {
        form.remove('show');
        form.add('hide');
        RESET_Form();
        body.remove('overflow-hidden');
    }
};
