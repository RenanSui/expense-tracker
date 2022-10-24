import formatDate from './formatDate.js';
import getLocalStorage from './getLocalStorage.js';
export const AddNewTransaction = (title, amountNumber, note, type, date, id, tag) => {
    const history = getLocalStorage();
    const transactionData = {
        id: createRandomId(),
        title: title,
        amountNumber: amountNumber,
        date: formatDate(date),
        type: type,
        tag: tag,
        note: note,
    };
    history.unshift(transactionData);
    localStorage.setItem('history', JSON.stringify(history));
};
export const AddNewId_LocalStorage = (id) => {
    localStorage.setItem('currentId', JSON.stringify(id));
};
const createRandomId = () => {
    const id = Date.now();
    return id;
};
export const getClickedElementId = (e) => {
    const eventTarget = e.target;
    const parentElement = eventTarget;
    return parentElement.id;
};
