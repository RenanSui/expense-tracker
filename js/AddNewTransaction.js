import formatDate from './formatDate.js';
import getLocalStorage from './getLocalStorage.js';
const AddNewTransaction = (title, amountNumber, note, type, date, id, tag) => {
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
const createRandomId = () => {
    const id = Date.now();
    return id;
};
export default AddNewTransaction;
