import ReturnFormData from './ReturnFormData.js';
import ReturnEditFormData from './ReturnEditFormData.js';
const getFormData = (action) => {
    let formData;
    if (action === 'form')
        formData = ReturnFormData();
    if (action === 'editForm')
        formData = ReturnEditFormData();
    if (action !== 'form' && action !== 'editForm') {
        console.log('return data not specified for forms');
    }
    const { title, amountNumber, note, type, date, id, tag, } = formData;
    return {
        title: title,
        amountNumber: amountNumber,
        note: note,
        type: type,
        date: date,
        id: id,
        tag: tag,
    };
};
export default getFormData;
