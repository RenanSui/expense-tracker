import formatDate from './formatDate.js';
import getLocalStorage from './getLocalStorage.js';
const AddNewTransaction = (title, amountNumber, note, type, date, tag) => {
    const history = getLocalStorage();
    const transactionData = {
        id: createRandomId(),
        title: title,
        amountNumber: amountNumber,
        note: note,
        type: type,
        date: formatDate(date),
        tag: tag,
    };
    history.unshift(transactionData);
    localStorage.setItem('history', JSON.stringify(history));
};
const createRandomId = () => {
    const id = Date.now();
    return id;
};
export default AddNewTransaction;
