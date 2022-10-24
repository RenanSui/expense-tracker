import getLocalStorage from './getLocalStorage.js';
getLocalStorage;
export const DeleteForms = (currentId) => {
    const history = getLocalStorage();
    console.log(history);
    console.log('DeleteForms Function: ' + currentId);
    const newHistory = history.filter(({ title, amountNumber, note, type, date, id, tag, createdAt, }) => {
        if (currentId !== id) {
            return {
                title,
                amountNumber,
                note,
                type,
                date,
                id,
                tag,
                createdAt,
            };
        }
    });
    console.log(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));
};
