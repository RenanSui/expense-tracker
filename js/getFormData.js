import ReturnFormData from './ReturnFormData.js';
import ReturnEditFormData from './ReturnEditFormData.js';
const getFormData = (action, currentId) => {
    let formData;
    if (action === 'form')
        formData = ReturnFormData();
    if (action === 'editForm')
        formData = ReturnEditFormData(currentId);
    if (action !== 'form' && action !== 'editForm') {
        console.log('return data not specified for forms');
    }
    const { title, amountNumber, note, type, date, id, tag, createdAt } = formData;
    console.log(createdAt);
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
export default getFormData;
